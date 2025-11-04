import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { auctionService } from '../services';
import { queryKeys } from '../config/queryClient';
import { CreateAuctionData, UpdateAuctionData, PaginationParams, getErrorMessage } from '../types';
import { useUIStore } from '../store';

export const useAuctions = (params?: PaginationParams) => {
  return useQuery({
    queryKey: queryKeys.auctionsList(params),
    queryFn: () => auctionService.getAll(params),
  });
};

export const useActiveAuctions = (params?: PaginationParams) => {
  return useQuery({
    queryKey: queryKeys.activeAuctions(params),
    queryFn: () => auctionService.getActive(params),
  });
};

export const useAuction = (id: string) => {
  return useQuery({
    queryKey: queryKeys.auction(id),
    queryFn: () => auctionService.getById(id),
    enabled: !!id,
  });
};

export const useMyAuctions = () => {
  return useQuery({
    queryKey: queryKeys.myAuctions,
    queryFn: auctionService.getMyAuctions,
  });
};

export const useCreateAuction = () => {
  const queryClient = useQueryClient();
  const showToast = useUIStore((state) => state.showToast);

  return useMutation({
    mutationFn: (data: CreateAuctionData) => auctionService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.auctions });
      queryClient.invalidateQueries({ queryKey: queryKeys.myAuctions });
      showToast({
        type: 'success',
        message: 'Auction created successfully!',
      });
    },
    onError: (error: unknown) => {
      showToast({
        type: 'error',
        message: getErrorMessage(error) || 'Failed to create auction',
      });
    },
  });
};

export const useUpdateAuction = () => {
  const queryClient = useQueryClient();
  const showToast = useUIStore((state) => state.showToast);

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateAuctionData }) =>
      auctionService.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.auction(variables.id) });
      queryClient.invalidateQueries({ queryKey: queryKeys.auctions });
      queryClient.invalidateQueries({ queryKey: queryKeys.myAuctions });
      showToast({
        type: 'success',
        message: 'Auction updated successfully!',
      });
    },
    onError: (error: unknown) => {
      showToast({
        type: 'error',
        message: getErrorMessage(error) || 'Failed to update auction',
      });
    },
  });
};

export const useDeleteAuction = () => {
  const queryClient = useQueryClient();
  const showToast = useUIStore((state) => state.showToast);

  return useMutation({
    mutationFn: (id: string) => auctionService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.auctions });
      queryClient.invalidateQueries({ queryKey: queryKeys.myAuctions });
      showToast({
        type: 'success',
        message: 'Auction deleted successfully!',
      });
    },
    onError: (error: unknown) => {
      showToast({
        type: 'error',
        message: getErrorMessage(error) || 'Failed to delete auction',
      });
    },
  });
};
