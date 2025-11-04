import  { BadgeProps } from '../../interfaces/atoms';
import { BADGE_VARIANT_CLASSES, BADGE_SIZE_CLASSES } from '../constants';

function Badge(props: BadgeProps) {
  const { children, variant = 'default', size = 'md', className = '' } = props;
  
  return (
    <span className={`inline-flex items-center font-medium rounded-full ${BADGE_VARIANT_CLASSES[variant]} ${BADGE_SIZE_CLASSES[size]} ${className}`}>
      {children}
    </span>
  );
}

export default Badge;
