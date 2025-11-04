import  { useCallback, useMemo, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Image, Text, Badge } from '../atoms';
import { CountdownTimer, PriceDisplay } from './';
import { getImageUrl, isAuctionActive } from '../../utils';
import { AuctionCardProps } from '@/interfaces';

function AuctionCardComponent(props: AuctionCardProps) {
  const { auction } = props;
  const navigate = useNavigate();
  const isActive = useMemo(() => isAuctionActive(auction.endTime), [auction.endTime]);

  const handleClick = useCallback(() => {
    navigate(`/auctions/${auction.id}`);
  }, [navigate, auction.id]);

  return (
    <Card hover className="cursor-pointer" padding="none">
      <div onClick={handleClick}>
        {/* Image */}
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={getImageUrl(auction.imageUrl)}
            alt={auction.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <Badge variant={isActive ? 'success' : 'danger'}>
              {isActive ? 'Active' : 'Ended'}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <Text variant="h4" className="mb-2 truncate">
            {auction.title}
          </Text>
          
          {auction.description && (
            <Text variant="small" color="secondary" className="mb-3 line-clamp-2">
              {auction.description}
            </Text>
          )}

          <div className="flex justify-between items-end">
            <PriceDisplay
              label="Current Bid"
              amount={auction.currentPrice}
              highlight
              size="sm"
            />
            
            {isActive && <CountdownTimer endTime={auction.endTime} />}
          </div>
        </div>
      </div>
    </Card>
  );
}

const AuctionCard = memo(AuctionCardComponent);
AuctionCard.displayName = 'AuctionCard';

export default AuctionCard;
