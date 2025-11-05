import { Text, DecorativeLayer } from '../../atoms';
import { IconButtonProps } from '@/interfaces/atoms';

function IconButton({ icon, label, variant = 'primary', size = 'sm', className = '', ...props }: IconButtonProps) {
  const baseClasses = 'relative overflow-hidden transition-all duration-300 flex items-center gap-1.5';
  
  const variantClasses = {
    primary: 'shadow-lg hover:shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white',
    outline: 'hover:bg-gray-50 hover:border-gray-400 border border-gray-300 text-gray-700'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} rounded-lg ${className}`}
      {...props}
    >
      {variant === 'primary' && (
        <DecorativeLayer className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      )}
      <Text as="span" className="relative flex items-center gap-1.5">
        {icon}
        {label}
      </Text>
    </button>
  );
}

export default IconButton;
