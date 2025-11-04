import { QueryClient } from '@tanstack/react-query';
import { PaginationParams } from '../types';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // Retry failed requests twice
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
      refetchOnWindowFocus: false, // Don't refetch on window focus (auction app specific)
      refetchOnReconnect: true, // Refetch on reconnect (important for real-time data)
      staleTime: 5 * 60 * 1000, // 5 minutes - data considered fresh
      gcTime: 10 * 60 * 1000, // 10 minutes - cache garbage collection time
      networkMode: 'online', // Only run queries when online
    },
    mutations: {
      retry: 1, // Retry mutations once (was 0)
      retryDelay: 1000, // Wait 1 second before retry
      networkMode: 'online', // Only run mutations when online
    },
  },
});

// Query keys
export const queryKeys = {
  // Auth
  profile: ['profile'] as const,
  
  // Auctions
  auctions: ['auctions'] as const,
  auctionsList: (params?: PaginationParams) => ['auctions', 'list', params] as const,
  activeAuctions: (params?: PaginationParams) => ['auctions', 'active', params] as const,
  auction: (id: string) => ['auctions', id] as const,
  myAuctions: ['auctions', 'my'] as const,
  
  // Bids
  bids: ['bids'] as const,
  auctionBids: (auctionId: string) => ['bids', 'auction', auctionId] as const,
  myBids: ['bids', 'my'] as const,
};
