// API URLs
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
export const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:3001';

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  AUCTIONS: '/auctions',
  AUCTION_DETAIL: '/auctions/:id',
  CREATE_AUCTION: '/auctions/create',
  MY_AUCTIONS: '/my-auctions',
  MY_BIDS: '/my-bids',
  PROFILE: '/profile',
} as const;

// Pagination
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS = [10, 20, 50];

// File upload
export const MAX_FILE_SIZE_MB = 5;
export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];

// Toast durations
export const TOAST_DURATION = {
  SHORT: 3000,
  MEDIUM: 5000,
  LONG: 7000,
} as const;

// Auction status
export const AUCTION_STATUS = {
  ACTIVE: 'active',
  ENDED: 'ended',
  UPCOMING: 'upcoming',
} as const;

// Query stale times
export const STALE_TIME = {
  SHORT: 1 * 60 * 1000, // 1 minute
  MEDIUM: 5 * 60 * 1000, // 5 minutes
  LONG: 10 * 60 * 1000, // 10 minutes
} as const;
