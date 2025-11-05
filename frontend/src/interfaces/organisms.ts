

import { Auction, PaginatedAuctions, User } from '@/types';


export interface AuctionListProps {
  auctions?: Auction[];
  isLoading?: boolean;
  error?: Error | null;
  emptyMessage?: string;
}

export interface BidFormProps {
  auctionId: string;
  currentPrice: number;
  onSuccess?: () => void;
}


export interface BidFormData {
  amount: number;
}

export interface BidHistoryProps {
  auctionId: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}


export interface LoginFormData {
  email: string;
  password: string;
}


export interface HeroSectionProps {
  activeAuctionsCount?: number;
}


export interface ActiveAuctionsSectionProps {
  data?: PaginatedAuctions;
  isLoading: boolean;
  error: Error | null;
  page: number;
  onPageChange: (page: number) => void;
}


export interface NavigationProps {
  isAuthenticated: boolean;
}


export interface AuthSectionProps {
  isAuthenticated: boolean;
  user: User | null;
  onLogout: () => void;
}


export interface HeroContentProps {
  activeAuctionsCount?: number;
}


export interface AuctionsSectionHeaderProps {
  totalAuctions?: number;
}


export interface AuthenticatedActionsProps {
  user: { email?: string };
  showUserMenu: boolean;
  onToggleMenu: () => void;
  onLogout: () => void;
}

export interface AuctionBiddingSectionProps {
  auctionId: string;
  currentPrice: number;
  canBid: boolean;
  isAuthenticated: boolean;
  isOwner: boolean;
  isActive: boolean;
  onLoginClick: () => void;
}
