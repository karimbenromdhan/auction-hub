import { Text } from '../../atoms';
import { formatCurrency } from '../../../utils';
import { PriceDisplayProps } from '@/interfaces';
import { PRICE_DISPLAY_SIZE_VARIANTS } from '../../constants';

function PriceDisplay(props: PriceDisplayProps) {
  const { label, amount, highlight = false, size = 'md' } = props;

  return (
    <div className={highlight ? 'bg-blue-50 p-3 rounded-lg' : ''}>
      <Text variant={PRICE_DISPLAY_SIZE_VARIANTS[size].label as any} color="secondary" className="mb-1">
        {label}
      </Text>
      <Text 
        variant={PRICE_DISPLAY_SIZE_VARIANTS[size].price as any} 
        weight="bold" 
        color={highlight ? 'success' : 'primary'}
      >
        {formatCurrency(amount)}
      </Text>
    </div>
  );
}

export default PriceDisplay;
