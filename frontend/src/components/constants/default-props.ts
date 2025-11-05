/**
 * Default props for all components
 * Centralized to ensure consistency and easy maintenance
 */

import type {
  BadgeProps,
  ButtonProps,
  CardProps,
  ImageProps,
  InputProps,
  LabelProps,
  TextProps,
  TextareaProps
} from '@/interfaces/atoms';

import type {
  FileUploadProps,
  PriceDisplayProps,
  ToastProps,
  BidItemProps
} from '@/interfaces/molecules';

import type {
  AuctionListProps,
  LoadingSpinnerProps
} from '@/interfaces';

/**
 * Atom Default Props
 */
export const DEFAULT_BADGE_PROPS: Partial<BadgeProps> = {
  variant: 'default',
  size: 'md',
  className: '',
} as const;

export const DEFAULT_BUTTON_PROPS: Partial<ButtonProps> = {
  variant: 'primary',
  size: 'md',
  isLoading: false,
  fullWidth: false,
  disabled: false,
} as const;

export const DEFAULT_CARD_PROPS: Partial<CardProps> = {
  className: '',
  hover: false,
  padding: 'md',
} as const;

export const DEFAULT_IMAGE_PROPS: Partial<ImageProps> = {
  fallback: '/placeholder-image.jpg',
  className: '',
} as const;

export const DEFAULT_INPUT_PROPS: Partial<InputProps> = {
  fullWidth: false,
  className: '',
} as const;

export const DEFAULT_LABEL_PROPS: Partial<LabelProps> = {
  className: '',
} as const;

export const DEFAULT_TEXT_PROPS: Partial<TextProps> = {
  variant: 'body',
  color: 'primary',
  weight: 'normal',
  className: '',
} as const;

export const DEFAULT_TEXTAREA_PROPS: Partial<TextareaProps> = {
  fullWidth: false,
  className: '',
  rows: 4,
} as const;

/**
 * Molecule Default Props
 */
export const DEFAULT_BID_ITEM_PROPS: Partial<BidItemProps> = {
  isHighest: false,
} as const;

export const DEFAULT_FILE_UPLOAD_PROPS: Partial<FileUploadProps> = {
  accept: 'image/*',
  maxSizeMB: 5,
} as const;


export const DEFAULT_PRICE_DISPLAY_PROPS: Partial<PriceDisplayProps> = {
  highlight: false,
  size: 'md',
} as const;

export const DEFAULT_TOAST_PROPS: Partial<ToastProps> = {
  duration: 5000,
} as const;

/**
 * Organism Default Props
 */
export const DEFAULT_AUCTION_LIST_PROPS: Partial<AuctionListProps> = {
  emptyMessage: 'No auctions found',
} as const;

/**
 * Common Component Default Props
 */
export const DEFAULT_SPINNER_PROPS: Partial<LoadingSpinnerProps> = {
  size: 'md',
  fullScreen: false,
} as const;
