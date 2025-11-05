import { useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Text, Button, Card } from '../components/atoms';
import {
  AuctionImageCard,
  AuctionPriceCard,
  SellerInfo,
} from '../components/molecules';
import { BidHistory, AuctionBiddingSection } from '../components/organisms';
import { useAuction, useAuth, useAuctionRoom } from '../hooks';
import { isAuctionActive } from '../utils';
import AuctionDetailSkeleton from '../components/common/AuctionDetailSkeleton';

function AuctionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const { data: auction, isLoading, error, refetch } = useAuction(id!);

  useAuctionRoom(id);

  const handleAuctionExpire = useCallback(() => {
    refetch();
  }, [refetch]);

  if (isLoading) {
    return <AuctionDetailSkeleton />;
  }

  if (error || !auction) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card padding="lg" className="max-w-md text-center">
          <Text variant="h3" color="danger" className="mb-4">
            Auction Not Found
          </Text>
          <Text variant="body" color="secondary" className="mb-6">
            The auction you're looking for doesn't exist or has been removed.
          </Text>
          <Button onClick={() => navigate('/', { replace: true })}>
            Back to Home
          </Button>
        </Card>
      </div>
    );
  }

  const isActive = isAuctionActive(auction.endTime);
  const isOwner = user?.id === auction.ownerId;
  const canBid = isAuthenticated && isActive && !isOwner;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <AuctionImageCard auction={auction} />
            <Card padding="lg">
              <BidHistory auctionId={auction.id} />
            </Card>
          </div>

          <div className="space-y-6">
            <AuctionPriceCard
              currentPrice={auction.currentPrice}
              endTime={auction.endTime}
              isActive={isActive}
              onExpire={handleAuctionExpire}
            />

            <AuctionBiddingSection
              auctionId={auction.id}
              currentPrice={auction.currentPrice}
              canBid={canBid}
              isAuthenticated={isAuthenticated}
              isOwner={isOwner}
              isActive={isActive}
              onLoginClick={() => navigate('/login')}
            />

            <SellerInfo seller={auction.owner} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionDetailPage;
