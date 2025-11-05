import { forwardRef } from 'react';
import { TextareaProps } from '@/interfaces/atoms';
import Text from '../Typography/Text';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { error, fullWidth = false, className = '', rows = 4, ...restProps } = props;
  
  const baseClasses = 'px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200';
  const errorClasses = error
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500';
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <div className={widthClass}>
      <textarea
        ref={ref}
        rows={rows}
        className={`${baseClasses} ${errorClasses} ${widthClass} ${className}`}
        {...restProps}
      />
      {error && (
        <Text as="p" className="mt-1 text-sm text-red-600">{error}</Text>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
