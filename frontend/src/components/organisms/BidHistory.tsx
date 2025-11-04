import { Text } from '../atoms';
import { BidItem } from '../molecules';
import { useAuctionBids } from '../../hooks';
import LoadingSpinner from '../common/LoadingSpinner';
import { BidHistoryProps } from '@/interfaces';

function BidHistory(props: BidHistoryProps) {
  const { auctionId } = props;
  const { data: bids, isLoading, error } = useAuctionBids(auctionId);

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <LoadingSpinner size="md" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <Text variant="body" color="danger">
          Failed to load bid history
        </Text>
      </div>
    );
  }

  if (!bids || bids.length === 0) {
    return (
      <div className="text-center py-8">
        <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <Text variant="body" color="secondary">
          No bids yet. Be the first to bid!
        </Text>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <Text variant="h4" className="mb-4">
        Bid History ({bids.length})
      </Text>
      {bids.map((bid, index) => (
        <BidItem key={bid.id} bid={bid} isHighest={index === 0} />
      ))}
    </div>
  );
}

export default BidHistory;
