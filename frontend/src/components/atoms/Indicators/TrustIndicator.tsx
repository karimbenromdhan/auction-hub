import { TrustIndicatorProps } from '../../../interfaces/atoms';
import Text from '../Typography/Text';
import { memo } from 'react';
import { variantColorMap } from '../../../constants/colors';

function TrustIndicator({
  text,
  className = '',
  variant = 'success',
}: TrustIndicatorProps) {
  const colorClass = variantColorMap[variant] ?? variantColorMap.default;

  return (
    <div className={`flex items-center gap-2 ${className}`.trim()}>
      <svg
        aria-hidden="true"
        className={`w-5 h-5 ${colorClass}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      <Text as="span" className="text-sm text-white font-medium">
        {text}
      </Text>
    </div>
  );
}

export default memo(TrustIndicator);
