
import type { ReactNode } from 'react';

export type Size = 'sm' | 'md' | 'lg';

export type ExtendedSize = 'sm' | 'md' | 'lg' | 'xl';


export type StatusVariant = 'success' | 'warning' | 'danger' | 'info' | 'default';

export interface WithChildren {
  children: ReactNode;
}

export interface WithClassName {
  className?: string;
}

export interface WithError {
  error?: string;
}

export interface WithFullWidth {
  fullWidth?: boolean;
}

export interface LayoutProps {
  children?: ReactNode;
}

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}


