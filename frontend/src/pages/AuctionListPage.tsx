import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Text, Button } from '../components/atoms';
import { Pagination } from '../components/molecules';
import { AuctionList } from '../components/organisms';
import { useAuctions } from '../hooks';
import { auctionService } from '../services';
import { queryKeys } from '../config/queryClient';
import AuctionListSkeleton from '../components/common/AuctionListSkeleton';

function AuctionListPage() {
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const { data, isLoading, error } = useAuctions({ page, limit });
  const queryClient = useQueryClient();
  const topRef = useRef<HTMLDivElement>(null);
  
  // Prefetch next and previous pages for instant navigation
  useEffect(() => {
    if (!data) return;
    
    // Prefetch next page
    if (page < data.totalPages) {
      queryClient.prefetchQuery({
        queryKey: queryKeys.auctionsList({ page: page + 1, limit }),
        queryFn: () => auctionService.getAll({ page: page + 1, limit }),
        staleTime: 5 * 60 * 1000, // 5 minutes
      });
    }
    
    // Prefetch previous page
    if (page > 1) {
      queryClient.prefetchQuery({
        queryKey: queryKeys.auctionsList({ page: page - 1, limit }),
        queryFn: () => auctionService.getAll({ page: page - 1, limit }),
        staleTime: 5 * 60 * 1000, // 5 minutes
      });
    }
  }, [page, limit, data, queryClient]);
  
  const scrollToTop = useCallback(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div ref={topRef} className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Text variant="h2" className="mb-2">
            All Auctions
          </Text>
          <Text variant="body" color="secondary">
            Browse all available auctions
          </Text>
        </div>

        {data && (
          <div className="mb-6">
            <Text variant="body" color="secondary">
              Showing {((page - 1) * limit) + 1} - {Math.min(page * limit, data.total)} of {data.total} auctions
            </Text>
          </div>
        )}

        {isLoading ? (
          <AuctionListSkeleton />
        ) : (
          <AuctionList 
            auctions={data?.data} 
            isLoading={false} 
            error={error}
          />
        )}

        {/* Pagination */}
        <Pagination
          currentPage={page}
          totalPages={data?.totalPages || 1}
          onPageChange={(newPage) => {
            setPage(newPage);
            scrollToTop();
          }}
          variant="numbered"
        />
      </div>
    </div>
  );
}

export default AuctionListPage;
