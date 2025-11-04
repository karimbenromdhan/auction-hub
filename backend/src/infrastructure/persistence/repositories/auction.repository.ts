import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan } from 'typeorm';
import { Auction } from '../../../domain/entities/auction.entity';
import {
  IAuctionRepository,
  PaginationOptions,
  PaginatedResult,
} from '../../../domain/repositories/auction.repository.interface';

@Injectable()
export class TypeOrmAuctionRepository implements IAuctionRepository {
  constructor(
    @InjectRepository(Auction)
    private readonly auctionRepository: Repository<Auction>,
  ) {}

  async findById(id: string, loadRelations: boolean = true): Promise<Auction | null> {
    const relations = loadRelations ? ['owner', 'bids'] : ['owner'];
    return this.auctionRepository.findOne({
      where: { id },
      relations,
    });
  }

  async findAll(options: PaginationOptions): Promise<PaginatedResult<Auction>> {
    const { page, limit } = options;
    const skip = (page - 1) * limit;

    const [data, total] = await this.auctionRepository.findAndCount({
      relations: ['owner'],
      order: { createdAt: 'DESC' },
      skip,
      take: limit,
    });

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findActive(options: PaginationOptions): Promise<PaginatedResult<Auction>> {
    const { page, limit } = options;
    const skip = (page - 1) * limit;

    const [data, total] = await this.auctionRepository.findAndCount({
      where: {
        endTime: MoreThan(new Date()),
      },
      relations: ['owner'],
      order: { endTime: 'ASC' },
      skip,
      take: limit,
    });

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findByOwnerId(ownerId: string): Promise<Auction[]> {
    return this.auctionRepository.find({
      where: { ownerId },
      order: { createdAt: 'DESC' },
    });
  }

  async create(auctionData: Partial<Auction>): Promise<Auction> {
    const auction = this.auctionRepository.create(auctionData);
    return this.auctionRepository.save(auction);
  }

  async save(auction: Auction): Promise<Auction> {
    return this.auctionRepository.save(auction);
  }

  async delete(id: string): Promise<void> {
    await this.auctionRepository.delete(id);
  }
}
