import { useMemo, memo } from 'react';
import { Text } from '../../atoms';
import { formatCurrency, formatRelativeTime } from '../../../utils';
import { BidItemProps } from '../../../interfaces';
import { DEFAULT_BID_ITEM_PROPS } from '../../constants';

function BidItemComponent(props: BidItemProps) {
  const { bid, isHighest } = { ...DEFAULT_BID_ITEM_PROPS, ...props };
  const formattedAmount = useMemo(() => formatCurrency(bid.amount), [bid.amount]);
  const formattedTime = useMemo(() => formatRelativeTime(bid.createdAt), [bid.createdAt]);
  const userInitial = useMemo(() => bid.user?.email?.[0].toUpperCase() || 'U', [bid.user?.email]);
  return (
    <div className={`flex items-center justify-between p-3 rounded-lg ${isHighest ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <Text variant="body" className="text-white font-semibold">
            {userInitial}
          </Text>
        </div>
        <div>
          <Text variant="small" weight="medium">
            {bid.user?.email || 'Anonymous'}
          </Text>
          <Text variant="caption" color="secondary">
            {formattedTime}
          </Text>
        </div>
      </div>
      
      <div className="text-right">
        <Text variant="body" weight="bold" color={isHighest ? 'success' : 'primary'}>
          {formattedAmount}
        </Text>
        {isHighest && (
          <Text variant="caption" color="success">
            Highest Bid
          </Text>
        )}
      </div>
    </div>
  );
}

//if the parent re-renders (e.g., due to state changes unrelated to this bid), BidItem won't re-render unless its props differ.
const BidItem = memo(BidItemComponent);
BidItem.displayName = 'BidItem';

export default BidItem;
