import { LabelProps } from '@/interfaces/atoms';
import Text from '../Typography/Text';

function Label(props: LabelProps) {
  const { children, required, className = '', ...restProps } = props;
  
  return (
    <label className={`block text-sm font-medium text-gray-700 mb-1 ${className}`} {...restProps}>
      {children}
      {required && <Text as="span" className="text-red-500 ml-1">*</Text>}
    </label>
  );
}

export default Label;
