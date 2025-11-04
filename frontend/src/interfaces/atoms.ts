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
