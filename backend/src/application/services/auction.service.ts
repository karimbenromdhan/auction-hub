import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
  Inject,
} from '@nestjs/common';
import { IAuctionRepository } from '../../domain/repositories/auction.repository.interface';
import { CreateAuctionDto } from '../dtos/auction/create-auction.dto';
import { UpdateAuctionDto } from '../dtos/auction/update-auction.dto';
import { PaginationQueryDto } from '../dtos/auction/pagination-query.dto';
import { Auction } from '../../domain/entities/auction.entity';

@Injectable()
export class AuctionService {
  constructor(
    @Inject(IAuctionRepository)
    private readonly auctionRepository: IAuctionRepository,
  ) {}

  async getAllAuctions(paginationQuery: PaginationQueryDto) {
    const { page = 1, limit = 10 } = paginationQuery;
    return this.auctionRepository.findAll({ page, limit });
  }

  async getActiveAuctions(paginationQuery: PaginationQueryDto) {
    const { page = 1, limit = 10 } = paginationQuery;
    return this.auctionRepository.findActive({ page, limit });
  }

  async getAuctionById(id: string): Promise<Auction> {
    const auction = await this.auctionRepository.findById(id);
    if (!auction) {
      throw new NotFoundException(`Auction with ID ${id} not found`);
    }
    return auction;
  }

  async getUserAuctions(userId: string): Promise<Auction[]> {
    return this.auctionRepository.findByOwnerId(userId);
  }

  async createAuction(
    createAuctionDto: CreateAuctionDto,
    userId: string,
    imageUrl?: string,
  ): Promise<Auction> {
    const { title, description, startingPrice, endTime } = createAuctionDto;

    // Validate end time is in the future
    const endDate = new Date(endTime);
    if (endDate <= new Date()) {
      throw new BadRequestException('End time must be in the future');
    }

    const auction = await this.auctionRepository.create({
      title,
      description,
      startingPrice,
      currentPrice: startingPrice,
      endTime: endDate,
      ownerId: userId,
      imageUrl: imageUrl || undefined,
    });

    return auction;
  }

  async updateAuction(
    id: string,
    updateAuctionDto: UpdateAuctionDto,
    userId: string,
  ): Promise<Auction> {
    const auction = await this.getAuctionById(id);

    // Check ownership
    if (auction.ownerId !== userId) {
      throw new ForbiddenException('You can only update your own auctions');
    }

    // Check if auction has ended
    if (auction.hasEnded()) {
      throw new BadRequestException('Cannot update an auction that has ended');
    }

    // Check if there are bids
    if (auction.bids && auction.bids.length > 0) {
      throw new BadRequestException('Cannot update an auction that has bids');
    }

    // Update fields
    if (updateAuctionDto.title) auction.title = updateAuctionDto.title;
    if (updateAuctionDto.description !== undefined)
      auction.description = updateAuctionDto.description;
    if (updateAuctionDto.startingPrice) {
      auction.startingPrice = updateAuctionDto.startingPrice;
      auction.currentPrice = updateAuctionDto.startingPrice;
    }
    if (updateAuctionDto.endTime) {
      const endDate = new Date(updateAuctionDto.endTime);
      if (endDate <= new Date()) {
        throw new BadRequestException('End time must be in the future');
      }
      auction.endTime = endDate;
    }

    return this.auctionRepository.save(auction);
  }

  async deleteAuction(id: string, userId: string): Promise<void> {
    const auction = await this.getAuctionById(id);

    // Check ownership
    if (auction.ownerId !== userId) {
      throw new ForbiddenException('You can only delete your own auctions');
    }

    // Check if there are bids
    if (auction.bids && auction.bids.length > 0) {
      throw new BadRequestException('Cannot delete an auction that has bids');
    }

    await this.auctionRepository.delete(id);
  }

  async updateAuctionPrice(auctionId: string, newPrice: number): Promise<Auction> {
    const auction = await this.getAuctionById(auctionId);
    auction.currentPrice = newPrice;
    return this.auctionRepository.save(auction);
  }
}
