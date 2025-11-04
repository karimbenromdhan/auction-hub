/**
 * Interface definitions for Organism components
 */

import  { Auction, PaginatedAuctions, User } from '@/types';

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

/**
 * HeroSection component props
 */
export interface HeroSectionProps {
  activeAuctionsCount?: number;
}

/**
 * ActiveAuctionsSection component props
 */
export interface ActiveAuctionsSectionProps {
  data?: PaginatedAuctions;
  isLoading: boolean;
  error: Error | null;
  page: number;
  onPageChange: (page: number) => void;
}

/**
 * Navigation component props
 */
export interface NavigationProps {
  isAuthenticated: boolean;
}

/**
 * AuthSection component props
 */
export interface AuthSectionProps {
  isAuthenticated: boolean;
  user: User | null;
  onLogout: () => void;
}

/**
 * HeroContent component props
 */
export interface HeroContentProps {
  activeAuctionsCount?: number;
}

/**
 * AuctionsSectionHeader component props
 */
export interface AuctionsSectionHeaderProps {
  totalAuctions?: number;
}

/**
 * AuthenticatedActions component props
 */
export interface AuthenticatedActionsProps {
  user: { email?: string };
  showUserMenu: boolean;
  onToggleMenu: () => void;
  onLogout: () => void;
}
