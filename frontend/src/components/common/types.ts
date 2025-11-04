import { ReactNode } from 'react';

// PageWrapper Types
export interface PageWrapperProps {
  children: ReactNode;
  withDecorations?: boolean;
  className?: string;
}

// PageHero Types
export interface StatBadge {
  icon: ReactNode;
  label: string;
  value: string | number;
  variant?: 'default' | 'success' | 'info' | 'warning';
}

export interface PageHeroProps {
  badge?: {
    icon: ReactNode;
    text: string;
  };
  title: string;
  subtitle: string;
  stats?: StatBadge[];
  action?: ReactNode;
  variant?: 'default' | 'compact';
}

// ContentSection Types
export interface ContentSectionProps {
  children: ReactNode;
  withDecorations?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full';
  className?: string;
}

// EmptyState Types
export interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick?: () => void;
    to?: string;
  };
  className?: string;
}

// ShimmerButton Types
export interface ShimmerButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}
