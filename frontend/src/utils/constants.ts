export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
export const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:3001';

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


