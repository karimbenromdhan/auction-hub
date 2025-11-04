/**
 * Interface definitions for Organism components
 */

import  { Auction } from '@/types';

/**
 * AuctionList component props
 */
export interface AuctionListProps {
  auctions?: Auction[];
  isLoading?: boolean;
  error?: Error | null;
  emptyMessage?: string;
}

/**
 * BidForm component props
 */
export interface BidFormProps {
  auctionId: string;
  currentPrice: number;
  onSuccess?: () => void;
}

/**
 * BidForm data interface
 */
export interface BidFormData {
  amount: number;
}

/**
 * BidHistory component props
 */
export interface BidHistoryProps {
  auctionId: string;
}

/**
 * RegisterForm data interface
 */
export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

/**
 * LoginForm data interface
 */
export interface LoginFormData {
  email: string;
  password: string;
}
