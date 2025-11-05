
import type { ReactNode } from 'react';
import type { Auction, Bid } from '@/types';
import type { Size } from './common';


export interface AuctionCardProps {
  auction: Auction;
}


export interface BidItemProps {
  bid: Bid;
  isHighest?: boolean;
}


export interface CountdownTimerProps {
  endTime: string;
  onExpire?: () => void;
}


export interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  accept?: string;
  maxSizeMB?: number;
  error?: string;
}


export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}



export interface PriceDisplayProps {
  label: string;
  amount: number;
  highlight?: boolean;
  size?: Size;
}

export interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  onClose: (id: string) => void;
  duration?: number;
}

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}


export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: 'simple' | 'numbered';
  maxVisiblePages?: number;
}


export interface LogoProps {
  showTagline?: boolean;
}


export interface NavLinkProps {
  to: string;
  icon: ReactNode;
  label: string;
  isActive: boolean;
}

export interface UserAvatarProps {
  email?: string;
  isMenuOpen: boolean;
  onToggle: () => void;
}

export interface UserDropdownMenuProps {
  email?: string;
  onLogout: () => void;
  isVisible: boolean;
}


export interface HeroHeadingProps {
  title: string;
  subtitle: string;
}


export interface HeroStatsProps {
  activeAuctionsCount?: number;
}


export interface SectionHeaderTitleProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}


export interface AuctionStatsBarProps {
  totalAuctions?: number;
}


export interface LogoutButtonProps {
  onLogout: () => void;
}

export interface UserMenuProps {
  email?: string;
  isMenuOpen: boolean;
  onToggle: () => void;
  onLogout: () => void;
}


export interface CTAHeadingProps {
  title: string;
  description: string;
}


export interface AuctionImageCardProps {
  auction: Auction;
}


export interface AuctionPriceCardProps {
  currentPrice: number;
  endTime: string;
  isActive: boolean;
  onExpire: () => void;
}


export interface SellerInfoProps {
  seller?: {
    email?: string;
  };
}
