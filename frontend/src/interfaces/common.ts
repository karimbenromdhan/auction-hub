/**
 * Common interfaces shared across multiple components
 */

import type { ReactNode } from 'react';

/**
 * Common size variants used across components
 */
export type Size = 'sm' | 'md' | 'lg';

/**
 * Extended size variants including extra-large
 */
export type ExtendedSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Common variant types for status/state indication
 */
export type StatusVariant = 'success' | 'warning' | 'danger' | 'info' | 'default';

/**
 * Common props for components that accept children
 */
export interface WithChildren {
  children: ReactNode;
}

/**
 * Common props for components with optional className
 */
export interface WithClassName {
  className?: string;
}

/**
 * Common props for components with error states
 */
export interface WithError {
  error?: string;
}

/**
 * Common props for components with full width option
 */
export interface WithFullWidth {
  fullWidth?: boolean;
}
