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

/**
 * FeatureCard component props
 */
export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

/**
 * Pagination component props
 */
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: 'simple' | 'numbered';
  maxVisiblePages?: number;
}

/**
 * Logo component props
 */
export interface LogoProps {
  showTagline?: boolean;
}

/**
 * NavLink component props
 */
export interface NavLinkProps {
  to: string;
  icon: ReactNode;
  label: string;
  isActive: boolean;
}

/**
 * UserAvatar component props
 */
export interface UserAvatarProps {
  email?: string;
  isMenuOpen: boolean;
  onToggle: () => void;
}

/**
 * UserDropdownMenu component props
 */
export interface UserDropdownMenuProps {
  email?: string;
  onLogout: () => void;
  isVisible: boolean;
}

/**
 * HeroHeading component props
 */
export interface HeroHeadingProps {
  title: string;
  subtitle: string;
}

/**
 * HeroStats component props
 */
export interface HeroStatsProps {
  activeAuctionsCount?: number;
}

/**
 * SectionHeaderTitle component props
 */
export interface SectionHeaderTitleProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

/**
 * AuctionStatsBar component props
 */
export interface AuctionStatsBarProps {
  totalAuctions?: number;
}

/**
 * LogoutButton component props
 */
export interface LogoutButtonProps {
  onLogout: () => void;
}

/**
 * UserMenu component props
 */
export interface UserMenuProps {
  email?: string;
  isMenuOpen: boolean;
  onToggle: () => void;
  onLogout: () => void;
}

/**
 * CTAHeading component props
 */
export interface CTAHeadingProps {
  title: string;
  description: string;
}
