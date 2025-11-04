import { LabelProps } from '@/interfaces/atoms';

function Label(props: LabelProps) {
  const { children, required, className = '', ...restProps } = props;
  
  return (
    <label className={`block text-sm font-medium text-gray-700 mb-1 ${className}`} {...restProps}>
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}

export default Label;
