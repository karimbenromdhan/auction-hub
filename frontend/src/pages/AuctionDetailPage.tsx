import React, { useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Text, Button, Card, Badge, Image } from '../components/atoms';
import { PriceDisplay, CountdownTimer } from '../components/molecules';
import { BidForm, BidHistory } from '../components/organisms';
import { useAuction, useAuth, useAuctionRoom } from '../hooks';
import { getImageUrl, isAuctionActive, formatDate } from '../utils';
import AuctionDetailSkeleton from '../components/common/AuctionDetailSkeleton';

function AuctionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const { data: auction, isLoading, error, refetch } = useAuction(id!);
  
  // Join auction room for real-time updates
  useAuctionRoom(id);

  // Handle auction expiration
  const handleAuctionExpire = useCallback(() => {
    // Refetch auction data to update UI
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
          <Button onClick={() => navigate('/')}>
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
          {/* Left Column - Image and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image */}
            <Card padding="none">
              <div className="relative h-96 overflow-hidden rounded-t-lg">
                <Image
                  src={getImageUrl(auction.imageUrl)}
                  alt={auction.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={isActive ? 'success' : 'danger'} size="lg">
                    {isActive ? 'Active' : 'Ended'}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <Text variant="h2" className="mb-4">
                  {auction.title}
                </Text>
                {auction.description && (
                  <Text variant="body" color="secondary" className="mb-6">
                    {auction.description}
                  </Text>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Text variant="small" color="secondary" className="mb-1">
                      Starting Price
                    </Text>
                    <Text variant="h4" weight="semibold">
                      ${auction.startingPrice}
                    </Text>
                  </div>
                  <div>
                    <Text variant="small" color="secondary" className="mb-1">
                      Ends On
                    </Text>
                    <Text variant="body" weight="medium">
                      {formatDate(auction.endTime)}
                    </Text>
                  </div>
                </div>
              </div>
            </Card>

            {/* Bid History */}
            <Card padding="lg">
              <BidHistory auctionId={auction.id} />
            </Card>
          </div>

          {/* Right Column - Bidding */}
          <div className="space-y-6">
            {/* Current Price */}
            <Card padding="lg">
              <PriceDisplay
                label="Current Price"
                amount={auction.currentPrice}
                highlight
                size="lg"
              />
              {isActive && (
                <div className="mt-4 pt-4 border-t">
                  <CountdownTimer endTime={auction.endTime} onExpire={handleAuctionExpire} />
                </div>
              )}
            </Card>

            {/* Bid Form */}
            {canBid ? (
              <Card padding="lg">
                <Text variant="h4" className="mb-4">
                  Place Your Bid
                </Text>
                <BidForm auctionId={auction.id} currentPrice={auction.currentPrice} />
              </Card>
            ) : (
              <Card padding="lg" className="bg-gray-50">
                {!isAuthenticated ? (
                  <>
                    <Text variant="body" color="secondary" className="mb-4">
                      Please login to place a bid
                    </Text>
                    <Button fullWidth onClick={() => navigate('/login')}>
                      Login to Bid
                    </Button>
                  </>
                ) : isOwner ? (
                  <Text variant="body" color="secondary">
                    You cannot bid on your own auction
                  </Text>
                ) : (
                  <Text variant="body" color="secondary">
                    This auction has ended
                  </Text>
                )}
              </Card>
            )}

            {/* Seller Info */}
            <Card padding="lg">
              <Text variant="h4" className="mb-4">
                Seller Information
              </Text>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Text variant="h4" className="text-white">
                    {auction.owner?.email?.[0].toUpperCase() || 'U'}
                  </Text>
                </div>
                <div>
                  <Text variant="body" weight="medium">
                    {auction.owner?.email || 'Unknown'}
                  </Text>
                  <Text variant="small" color="secondary">
                    Seller
                  </Text>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionDetailPage;
