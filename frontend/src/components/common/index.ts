// Layout Components
export { default as PageWrapper } from './PageWrapper';
export { default as PageHero } from './PageHero';
export { default as ContentSection } from './ContentSection';

// UI Components
export { default as EmptyState } from './EmptyState';
export { default as ShimmerButton } from './ShimmerButton';

// Loading & Error Components
export { default as LoadingSpinner } from './LoadingSpinner';
export { default as Skeleton } from './Skeleton';
export { default as AuctionListSkeleton } from './AuctionListSkeleton';
export { default as AuctionDetailSkeleton } from './AuctionDetailSkeleton';

// Error Boundaries
export { default as ErrorBoundary } from './ErrorBoundary';
export { default as ErrorFallback } from './ErrorFallback';
export { default as RouteErrorBoundary } from './RouteErrorBoundary';

// Route Components
export { default as ProtectedRoute } from './ProtectedRoute';

// Utility Components
export { default as VirtualizedList } from './VirtualizedList';

// Types
export type {
  PageWrapperProps,
  PageHeroProps,
  StatBadge,
  ContentSectionProps,
  EmptyStateProps,
  ShimmerButtonProps,
  VirtualizedListProps,
} from '../../interfaces/common-components';

// Constants
export { VARIANT_COLORS, MAX_WIDTH_CLASSES } from './constants';
