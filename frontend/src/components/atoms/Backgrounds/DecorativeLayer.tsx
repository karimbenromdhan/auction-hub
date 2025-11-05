import { DecorativeLayerProps } from '@/interfaces/atoms';

function DecorativeLayer({ className = '', children = null }: DecorativeLayerProps) {
  return <span className={className} aria-hidden="true">{children}</span>;
}

export default DecorativeLayer;
