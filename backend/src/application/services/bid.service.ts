import {
  Injectable,
  BadRequestException,
  NotFoundException,
  Inject,
} from '@nestjs/common';
import { IBidRepository } from '../../domain/repositories/bid.repository.interface';
import { IAuctionRepository } from '../../domain/repositories/auction.repository.interface';
import { CreateBidDto } from '../dtos/bid/create-bid.dto';
import { Bid } from '../../domain/entities/bid.entity';

export interface IBidGateway {
  emitBidUpdate(auctionId: string, bid: Bid): void;
}

@Injectable()
export class BidService {
  private bidGateway: IBidGateway;

  constructor(
    @Inject(IBidRepository)
    private readonly bidRepository: IBidRepository,
    @Inject(IAuctionRepository)
    private readonly auctionRepository: IAuctionRepository,
  ) {}

  // Allow gateway to register itself to avoid circular dependency
  setGateway(gateway: IBidGateway) {
    this.bidGateway = gateway;
  }

  async placeBid(createBidDto: CreateBidDto, userId: string): Promise<Bid> {
    const { auctionId, amount } = createBidDto;

    try {
      // Get auction without loading bids to avoid cascade save issues
      const auction = await this.auctionRepository.findById(auctionId, false);
      if (!auction) {
        throw new NotFoundException('Auction not found');
      }

      // Validate auction is active
      if (auction.hasEnded()) {
        throw new BadRequestException('Auction has ended');
      }

      // Validate user is not the owner
      if (auction.ownerId === userId) {
        throw new BadRequestException('You cannot bid on your own auction');
      }

      // Convert currentPrice to number (TypeORM may return decimal as string)
      const currentPrice = Number(auction.currentPrice);

      // Validate bid amount is higher than current price
      if (amount <= currentPrice) {
        throw new BadRequestException(
          `Bid amount must be higher than current price ($${currentPrice})`,
        );
      }

      // Create bid with relationships
      const bid = await this.bidRepository.create({
        amount,
        auction: { id: auctionId } as any,
        user: { id: userId } as any,
      });

      // Update auction current price
      auction.currentPrice = amount;
      const updatedAuction = await this.auctionRepository.save(auction);
      
      console.log(`✅ Updated auction ${auctionId} current price: ${updatedAuction.currentPrice}`);

      // Emit WebSocket event for real-time updates
      if (this.bidGateway) {
        this.bidGateway.emitBidUpdate(auctionId, bid);
      }

      return bid;
    } catch (error) {
      console.error('❌ Error placing bid:', error);
      throw error;
    }
  }

  async getBidsByAuction(auctionId: string): Promise<Bid[]> {
    return this.bidRepository.findByAuctionId(auctionId);
  }

  async getUserBids(userId: string): Promise<Bid[]> {
    return this.bidRepository.findByUserId(userId);
  }

  async getHighestBid(auctionId: string): Promise<Bid | null> {
    return this.bidRepository.findHighestBid(auctionId);
  }
}
