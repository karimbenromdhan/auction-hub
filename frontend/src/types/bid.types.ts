import { User } from './user.types';
import { Auction } from './auction.types';

export interface Bid {
  id: string;
  amount: number;
  auctionId: string;
  userId: string;
  user?: User;
  auction?: Auction;
  createdAt: string;
}

export interface CreateBidData {
  auctionId: string;
  amount: number;
}

export interface BidUpdate {
  bid: Bid;
  message: string;
}
