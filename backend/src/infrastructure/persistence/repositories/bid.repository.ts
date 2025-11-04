import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bid } from '../../../domain/entities/bid.entity';
import { IBidRepository } from '../../../domain/repositories/bid.repository.interface';

@Injectable()
export class TypeOrmBidRepository implements IBidRepository {
  constructor(
    @InjectRepository(Bid)
    private readonly bidRepository: Repository<Bid>,
  ) {}

  async findById(id: string): Promise<Bid | null> {
    return this.bidRepository.findOne({
      where: { id },
      relations: ['user', 'auction'],
    });
  }

  async findByAuctionId(auctionId: string): Promise<Bid[]> {
    return this.bidRepository.find({
      where: { auction: { id: auctionId } },
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });
  }

  async findByUserId(userId: string): Promise<Bid[]> {
    return this.bidRepository.find({
      where: { user: { id: userId } },
      relations: ['auction', 'user'],
      order: { createdAt: 'DESC' },
    });
  }

  async findHighestBid(auctionId: string): Promise<Bid | null> {
    return this.bidRepository.findOne({
      where: { auction: { id: auctionId } },
      relations: ['user'],
      order: { amount: 'DESC' },
    });
  }

  async create(bidData: Partial<Bid>): Promise<Bid> {
    // Extract IDs from relationship objects
    const auctionId = (bidData.auction as any)?.id;
    const userId = (bidData.user as any)?.id;
    
    // Use raw query to insert with explicit foreign key values
    const result = await this.bidRepository.query(
      `INSERT INTO bid (amount, auction_id, user_id, created_at) 
       VALUES ($1, $2, $3, NOW()) 
       RETURNING *`,
      [bidData.amount, auctionId, userId]
    );
    
    // Map snake_case columns to camelCase properties
    const rawBid = result[0];
    return {
      id: rawBid.id,
      amount: rawBid.amount,
      auctionId: rawBid.auction_id,
      userId: rawBid.user_id,
      createdAt: rawBid.created_at,
    } as Bid;
  }

  async save(bid: Bid): Promise<Bid> {
    return this.bidRepository.save(bid);
  }
}
