/**
 * Interface definitions for Molecule components
 */

import type { ReactNode } from 'react';
import type { Auction, Bid } from '@/types';
import type { Size } from './common';

/**
 * AuctionCard component props
 */
export interface AuctionCardProps {
  auction: Auction;
}

/**
 * BidItem component props
 */
export interface BidItemProps {
  bid: Bid;
  isHighest?: boolean;
}

/**
 * CountdownTimer component props
 */
export interface CountdownTimerProps {
  endTime: string;
  onExpire?: () => void;
}

/**
 * FileUpload component props
 */
export interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  accept?: string;
  maxSizeMB?: number;
  error?: string;
}

/**
 * FormField component props
 */
export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

/**
 * Modal component props
 */
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * PriceDisplay component props
 */
export interface PriceDisplayProps {
  label: string;
  amount: number;
  highlight?: boolean;
  size?: Size;
}

/**
 * Toast component props
 */
export interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  onClose: (id: string) => void;
  duration?: number;
}
