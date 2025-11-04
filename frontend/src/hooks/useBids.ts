import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { bidService } from '../services';
import { queryKeys } from '../config/queryClient';
import { CreateBidData, Bid, Auction, getErrorMessage } from '../types';
import { useUIStore } from '../store';
import { useAuth } from './useAuth';

export const useAuctionBids = (auctionId: string) => {
  return useQuery({
    queryKey: queryKeys.auctionBids(auctionId),
    queryFn: () => bidService.getAuctionBids(auctionId),
    enabled: !!auctionId,
  });
};

export const useMyBids = () => {
  return useQuery({
    queryKey: queryKeys.myBids,
    queryFn: bidService.getMyBids,
  });
};

export const usePlaceBid = () => {
  const queryClient = useQueryClient();
  const showToast = useUIStore((state) => state.showToast);
  const { user } = useAuth();

  return useMutation({
    mutationFn: (data: CreateBidData) => bidService.placeBid(data),
    
    // Optimistic update - update UI immediately before server responds
    onMutate: async (newBid: CreateBidData) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: queryKeys.auctionBids(newBid.auctionId) });
      await queryClient.cancelQueries({ queryKey: queryKeys.auction(newBid.auctionId) });
      
      // Snapshot previous values
      const previousBids = queryClient.getQueryData<Bid[]>(queryKeys.auctionBids(newBid.auctionId));
      const previousAuction = queryClient.getQueryData<Auction>(queryKeys.auction(newBid.auctionId));
      
      // Optimistically update bids list
      if (previousBids && user) {
        const optimisticBid: Bid = {
          id: `temp-${Date.now()}`,
          amount: newBid.amount,
          auctionId: newBid.auctionId,
          userId: user.id,
          user: user,
          createdAt: new Date().toISOString(),
        };
        
        queryClient.setQueryData<Bid[]>(
          queryKeys.auctionBids(newBid.auctionId),
          [optimisticBid, ...previousBids]
        );
      }
      
      // Optimistically update auction current price
      if (previousAuction) {
        queryClient.setQueryData<Auction>(
          queryKeys.auction(newBid.auctionId),
          {
            ...previousAuction,
            currentPrice: newBid.amount,
          }
        );
      }
      
      // Return context with previous values for rollback
      return { previousBids, previousAuction };
    },
    
    onSuccess: (_, variables) => {
      // Invalidate to get real data from server
      queryClient.invalidateQueries({ queryKey: queryKeys.auctionBids(variables.auctionId) });
      queryClient.invalidateQueries({ queryKey: queryKeys.auction(variables.auctionId) });
      queryClient.invalidateQueries({ queryKey: queryKeys.myBids });
      queryClient.invalidateQueries({ queryKey: queryKeys.auctions });
      showToast({
        type: 'success',
        message: 'Bid placed successfully!',
      });
    },
    
    onError: (error: unknown, variables, context) => {
      // Rollback optimistic updates on error
      if (context?.previousBids) {
        queryClient.setQueryData(
          queryKeys.auctionBids(variables.auctionId),
          context.previousBids
        );
      }
      if (context?.previousAuction) {
        queryClient.setQueryData(
          queryKeys.auction(variables.auctionId),
          context.previousAuction
        );
      }
      
      showToast({
        type: 'error',
        message: getErrorMessage(error) || 'Failed to place bid',
      });
    },
  });
};
