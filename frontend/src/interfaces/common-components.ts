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
  fallback?: React.ComponentType<any>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

/**
 * RouteErrorBoundary component props
 */
export interface RouteErrorBoundaryProps {
  error: Error;
  resetErrorBoundary: () => void;
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

/**
 * Skeleton component props
 */
export interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

/**
 * ShimmerButton component props
 */
export interface ShimmerButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

/**
 * VirtualizedList component props
 */
export interface VirtualizedListProps<T> {
  items: T[];
  itemHeight: number;
  containerHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  overscan?: number;
  className?: string;
}

/**
 * PageWrapper component props
 */
export interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * StatBadge interface for stats display
 */
export interface StatBadge {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  variant?: 'default' | 'success' | 'info' | 'warning';
}

/**
 * PageHero component props
 */
export interface PageHeroProps {
  badge?: {
    icon: React.ReactNode;
    text: string;
  };
  title: string;
  subtitle: string;
  stats?: StatBadge[];
  action?: React.ReactNode;
  variant?: 'default' | 'compact';
}

/**
 * ContentSection component props
 */
export interface ContentSectionProps {
  children: React.ReactNode;
  withDecorations?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full';
  className?: string;
}

/**
 * EmptyState component props
 */
export interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick?: () => void;
    to?: string;
  };
  className?: string;
}
