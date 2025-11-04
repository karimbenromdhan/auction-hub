import { BUTTON_VARIANT_CLASSES, BUTTON_SIZE_CLASSES, LOADING_SPINNER_ICON } from '../constants';
import { ButtonProps } from '@/interfaces/atoms';

function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    fullWidth = false,
    className,
    disabled = false,
    ariaLabel,
    ...restProps
  } = props;
  
  const baseClasses = 'font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseClasses} ${BUTTON_VARIANT_CLASSES[variant]} ${BUTTON_SIZE_CLASSES[size]} ${widthClass} ${className || ''}`}
      disabled={disabled || isLoading}
      aria-label={ariaLabel}
      aria-busy={isLoading}
      {...restProps}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          {LOADING_SPINNER_ICON}
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
