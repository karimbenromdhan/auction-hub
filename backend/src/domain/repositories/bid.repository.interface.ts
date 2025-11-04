import { Bid } from '../entities/bid.entity';

export interface IBidRepository {
  findById(id: string): Promise<Bid | null>;
  findByAuctionId(auctionId: string): Promise<Bid[]>;
  findByUserId(userId: string): Promise<Bid[]>;
  findHighestBid(auctionId: string): Promise<Bid | null>;
  create(bid: Partial<Bid>): Promise<Bid>;
  save(bid: Bid): Promise<Bid>;
}

export const IBidRepository = Symbol('IBidRepository');
