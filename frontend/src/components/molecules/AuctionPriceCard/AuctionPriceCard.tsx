import { Card } from '../../atoms';
import { PriceDisplay, CountdownTimer } from '../';
import { AuctionPriceCardProps } from '../../../interfaces/molecules';

function AuctionPriceCard({
  currentPrice,
  endTime,
  isActive,
  onExpire,
}: AuctionPriceCardProps) {
  return (
    <Card padding="lg">
      <PriceDisplay
        label="Current Price"
        amount={currentPrice}
        highlight
        size="lg"
      />
      {isActive && (
        <div className="mt-4 pt-4 border-t">
          <CountdownTimer endTime={endTime} onExpire={onExpire} />
        </div>
      )}
    </Card>
  );
}

export default AuctionPriceCard;
