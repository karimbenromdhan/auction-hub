/**
 * Style constants for components
 * Centralized styling configurations to ensure consistency
 */

/**
 * Button style variants
 */
export const BUTTON_VARIANT_CLASSES = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
} as const;

/**
 * Button size classes
 */
export const BUTTON_SIZE_CLASSES = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
} as const;

/**
 * Badge variant classes
 */
export const BADGE_VARIANT_CLASSES = {
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  danger: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800',
  default: 'bg-gray-100 text-gray-800',
} as const;

/**
 * Badge size classes
 */
export const BADGE_SIZE_CLASSES = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
} as const;

/**
 * Card padding classes
 */
export const CARD_PADDING_CLASSES = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
} as const;

/**
 * Modal size classes
 */
export const MODAL_SIZE_CLASSES = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
} as const;

/**
 * Toast type styles
 */
export const TOAST_TYPE_STYLES = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
  warning: 'bg-yellow-500',
} as const;

/**
 * Loading spinner size classes
 */
export const SPINNER_SIZE_CLASSES = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
} as const;

/**
 * Text variant to HTML element mapping
 */
export const TEXT_VARIANT_ELEMENTS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  small: 'span',
  caption: 'span',
} as const;

/**
 * Text variant classes
 */
export const TEXT_VARIANT_CLASSES = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-semibold',
  body: 'text-base',
  small: 'text-sm',
  caption: 'text-xs',
} as const;

/**
 * Text color classes
 */
export const TEXT_COLOR_CLASSES = {
  primary: 'text-gray-900',
  secondary: 'text-gray-600',
  success: 'text-green-600',
  danger: 'text-red-600',
  warning: 'text-yellow-600',
} as const;

/**
 * Text weight classes
 */
export const TEXT_WEIGHT_CLASSES = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
} as const;

/**
 * Price display size variants
 */
export const PRICE_DISPLAY_SIZE_VARIANTS = {
  sm: { label: 'caption', price: 'small' },
  md: { label: 'small', price: 'body' },
  lg: { label: 'body', price: 'h4' },
} as const;
