import { Auction } from '../entities/auction.entity';

export interface PaginationOptions {
  page: number;
  limit: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface IAuctionRepository {
  findById(id: string, loadRelations?: boolean): Promise<Auction | null>;
  findAll(options: PaginationOptions): Promise<PaginatedResult<Auction>>;
  findActive(options: PaginationOptions): Promise<PaginatedResult<Auction>>;
  findByOwnerId(ownerId: string): Promise<Auction[]>;
  create(auction: Partial<Auction>): Promise<Auction>;
  save(auction: Auction): Promise<Auction>;
  delete(id: string): Promise<void>;
}

export const IAuctionRepository = Symbol('IAuctionRepository');
