import { useEffect, useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { socketService } from '../services';
import { queryKeys } from '../config/queryClient';
import { BidUpdate } from '../types';
import { useSocket } from './useSocket';
import { useUIStore } from '../store';

export const useAuctionRoom = (auctionId: string | undefined) => {
  const { isConnected } = useSocket();
  const queryClient = useQueryClient();
  const showToast = useUIStore((state) => state.showToast);

  // Join auction room
  useEffect(() => {
    if (isConnected && auctionId) {
      socketService.joinAuction(auctionId);

      return () => {
        socketService.leaveAuction(auctionId);
      };
    }
  }, [isConnected, auctionId]);

  // Listen for bid updates
  useEffect(() => {
    if (!isConnected || !auctionId) return;

    const handleBidUpdate = (data: BidUpdate) => {
      // Update auction query cache
      queryClient.invalidateQueries({ queryKey: queryKeys.auction(auctionId) });
      queryClient.invalidateQueries({ queryKey: queryKeys.auctionBids(auctionId) });
      queryClient.invalidateQueries({ queryKey: queryKeys.auctions });
      
      showToast({
        type: 'info',
        message: `New bid: $${data.bid.amount}`,
        duration: 3000,
      });
    };

    const handleAuctionEnded = () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.auction(auctionId) });
      showToast({
        type: 'warning',
        message: 'Auction has ended',
      });
    };

    socketService.on('bidUpdate', handleBidUpdate);
    socketService.on('auctionEnded', handleAuctionEnded);

    return () => {
      socketService.off('bidUpdate', handleBidUpdate);
      socketService.off('auctionEnded', handleAuctionEnded);
    };
  }, [isConnected, auctionId, queryClient, showToast]);

  const placeBidViaSocket = useCallback(
    (amount: number, userId: string) => {
      if (auctionId) {
        socketService.placeBid(auctionId, amount, userId);
      }
    },
    [auctionId]
  );

  return {
    placeBidViaSocket,
  };
};
