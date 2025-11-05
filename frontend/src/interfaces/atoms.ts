/**
 * Interface definitions for Atom components
 */

import type { 
  ButtonHTMLAttributes, 
  InputHTMLAttributes, 
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode 
} from 'react';
import type { Size, StatusVariant, WithChildren, WithClassName, WithError, WithFullWidth } from './common';

/**
 * Badge component props
 */
export interface BadgeProps extends WithChildren, WithClassName {
  variant?: StatusVariant;
  size?: Size;
}

/**
 * Button component props
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  size?: Size;
  isLoading?: boolean;
  fullWidth?: boolean;
  ariaLabel?: string;
}

/**
 * IconButton component props
 */
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Card component props
 */
export interface CardProps extends WithChildren, WithClassName {
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Image component props
 */
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

/**
 * Input component props
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, WithError, WithFullWidth {
  className?: string;
}

/**
 * Label component props
 */
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

/**
 * Text component props
 */
export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small' | 'caption';
export type TextColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';

export interface TextProps extends WithChildren {
  variant?: TextVariant;
  color?: TextColor;
  weight?: TextWeight;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Textarea component props
 */
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, WithError, WithFullWidth {
  className?: string;
}

/**
 * LiveBadge component props
 */
export interface LiveBadgeProps {
  text?: string;
}

/**
 * WaveDivider component props
 */
export interface WaveDividerProps {
  fillColor?: string;
}

/**
 * SectionIcon component props
 */
export interface SectionIconProps {
  icon: ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger';
}

/**
 * StatBadge component props
 */
export interface StatBadgeProps {
  icon?: ReactNode;
  label: string;
  variant?: 'primary' | 'default';
  animated?: boolean;
}

/**
 * BadgeTag component props
 */
export interface BadgeTagProps {
  icon: ReactNode;
  text: string;
}

/**
 * TrustIndicator component props
 */
export interface TrustIndicatorProps {
  text: string;
}

/**
 * DecorativeLayer component props
 * Used for purely visual/decorative elements like animation overlays
 */
export interface DecorativeLayerProps extends WithClassName {
  children?: ReactNode;
}
