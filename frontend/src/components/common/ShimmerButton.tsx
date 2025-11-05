import { Button, Text, DecorativeLayer } from '../atoms';
import { Link } from 'react-router-dom';
import { ShimmerButtonProps } from '../../interfaces/common-components';

function ShimmerButton({ 
  children, 
  to, 
  onClick, 
  size = 'lg', 
  className = '',
  icon,
  iconPosition = 'left'
}: ShimmerButtonProps) {
  const buttonContent = (
    <Button 
      variant="primary" 
      size={size}
      onClick={onClick}
      className={`relative overflow-hidden bg-white hover:bg-gray-50 shadow-2xl hover:shadow-3xl transition-all duration-300 group/shimmer border-0 px-8 py-4 ${className}`}
    >
      <DecorativeLayer className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transform -skew-x-12 -translate-x-full group-hover/shimmer:translate-x-full transition-transform duration-700" />
      <Text as="span" className="relative flex items-center gap-2 font-bold text-blue-600">
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </Text>
    </Button>
  );

  if (to) {
    return <Link to={to}>{buttonContent}</Link>;
  }

  return buttonContent;
}

export default ShimmerButton;
