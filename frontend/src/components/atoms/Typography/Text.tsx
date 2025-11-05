import { createElement } from 'react';
import { TextProps } from '@/interfaces/atoms';
import { 
  TEXT_VARIANT_CLASSES, 
  TEXT_COLOR_CLASSES, 
  TEXT_WEIGHT_CLASSES,
  TEXT_VARIANT_ELEMENTS
} from '../../constants';

function Text(props: TextProps) {
  const { children, variant = 'body', color = 'primary', weight = 'normal', className = '', as } = props;

  const Component = as || TEXT_VARIANT_ELEMENTS[variant] || 'p';

  return createElement(
    Component,
    { className: `${TEXT_VARIANT_CLASSES[variant]} ${TEXT_COLOR_CLASSES[color]} ${TEXT_WEIGHT_CLASSES[weight]} ${className}` },
    children
  );
}

export default Text;
