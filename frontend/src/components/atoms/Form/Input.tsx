import { forwardRef } from 'react';
import { InputProps } from '@/interfaces/atoms';
import Text from '../Typography/Text';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { error, fullWidth = false, className = '', ...restProps } = props;

  const baseClasses = 'px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200';
  const errorClasses = error
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500';
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <div className={widthClass}>
      <input
        ref={ref}
        className={`${baseClasses} ${errorClasses} ${widthClass} ${className}`}
        {...restProps}
      />
      {error && (
        <Text as="p" className="mt-1 text-sm text-red-600">{error}</Text>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;