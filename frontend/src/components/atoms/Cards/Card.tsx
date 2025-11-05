import { CardProps } from '@/interfaces/atoms';
import { CARD_PADDING_CLASSES } from '../../constants';

function Card(props: CardProps) {
  const { children, className = '', hover = false, padding = 'md' } = props;

  const hoverClass = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';
  
  return (
    <div className={`bg-white rounded-lg shadow-md ${CARD_PADDING_CLASSES[padding]} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}

export default Card;
