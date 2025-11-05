import { Card, Badge, Image, Text } from '../../atoms';
import { getImageUrl, isAuctionActive, formatDate } from '../../../utils';
import { AuctionImageCardProps } from '../../../interfaces/molecules';

function AuctionImageCard({ auction }: AuctionImageCardProps) {
  const isActive = isAuctionActive(auction.endTime);

  return (
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
  );
}

export default AuctionImageCard;
