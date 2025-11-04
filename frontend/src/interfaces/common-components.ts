/**
 * Interface definitions for Common components (ErrorBoundary, LoadingSpinner, etc.)
 */

import type { ReactNode } from 'react';
import type { Size } from './common';

/**
 * ErrorBoundary component props
 */
export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * LoadingSpinner component props
 */
export interface LoadingSpinnerProps {
  size?: Size;
  fullScreen?: boolean;
  message?: string;
}

/**
 * ProtectedRoute component props
 */
export interface ProtectedRouteProps {
  children: ReactNode;
}
