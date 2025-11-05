import { Text, Button, Card } from '../../atoms';
import { BidForm } from '../';
import { AuctionBiddingSectionProps } from '../../../interfaces/organisms';

function AuctionBiddingSection({
  auctionId,
  currentPrice,
  canBid,
  isAuthenticated,
  isOwner,
  isActive,
  onLoginClick,
}: AuctionBiddingSectionProps) {
  if (canBid) {
    return (
      <Card padding="lg">
        <Text variant="h4" className="mb-4">
          Place Your Bid
        </Text>
        <BidForm auctionId={auctionId} currentPrice={currentPrice} />
      </Card>
    );
  }

  return (
    <Card padding="lg" className="bg-gray-50">
      {!isAuthenticated ? (
        <>
          <Text variant="body" color="secondary" className="mb-4">
            Please login to place a bid
          </Text>
          <Button fullWidth onClick={onLoginClick}>
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
  );
}

export default AuctionBiddingSection;
