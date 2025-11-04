import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bid } from '../../domain/entities/bid.entity';
import { Auction } from '../../domain/entities/auction.entity';
import { BidService } from '../../application/services/bid.service';
import { BidController } from '../controllers/bid.controller';
import { BidGateway } from '../gateways/bid.gateway';
import { TypeOrmBidRepository } from '../persistence/repositories/bid.repository';
import { TypeOrmAuctionRepository } from '../persistence/repositories/auction.repository';
import { IBidRepository } from '../../domain/repositories/bid.repository.interface';
import { IAuctionRepository } from '../../domain/repositories/auction.repository.interface';
import { AuthModule } from './auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Bid, Auction]), AuthModule],
  controllers: [BidController],
  providers: [
    BidService,
    BidGateway,
    {
      provide: IBidRepository,
      useClass: TypeOrmBidRepository,
    },
    {
      provide: IAuctionRepository,
      useClass: TypeOrmAuctionRepository,
    },
  ],
  exports: [BidService, BidGateway],
})
export class BidModule {}
