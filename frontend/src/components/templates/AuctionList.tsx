import { AuctionCard } from '../organisms';
import { Auction } from '../../types';
import { Text } from '../atoms';
import LoadingSpinner from '../common/LoadingSpinner';
import { AuctionListProps } from '@/interfaces';
import { DEFAULT_AUCTION_LIST_PROPS } from '../constants';

function AuctionList(props: AuctionListProps) {
  const { auctions, isLoading, error, emptyMessage } = { ...DEFAULT_AUCTION_LIST_PROPS, ...props };
  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" message="Loading auctions..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <svg className="w-16 h-16 mx-auto text-red-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <Text variant="h4" color="danger" className="mb-2">
          Failed to load auctions
        </Text>
        <Text variant="body" color="secondary">
          Please try again later
        </Text>
      </div>
    );
  }

  if (!auctions || auctions.length === 0) {
    return (
      <div className="text-center py-12">
        <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
        <Text variant="h4" color="secondary" className="mb-2">
          {emptyMessage}
        </Text>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {auctions.map((auction) => (
        <AuctionCard key={auction.id} auction={auction} />
      ))}
    </div>
  );
}

export default AuctionList;
