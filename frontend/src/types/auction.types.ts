import { User } from './user.types';
import { Bid } from './bid.types';

export interface Auction {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  startingPrice: number;
  currentPrice: number;
  endTime: string;
  ownerId: string;
  owner?: User;
  bids?: Bid[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateAuctionData {
  title: string;
  description?: string;
  startingPrice: number;
  endTime: string;
  image?: File;
}

export interface UpdateAuctionData {
  title?: string;
  description?: string;
  startingPrice?: number;
  endTime?: string;
}

export interface PaginatedAuctions {
  data: Auction[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}
