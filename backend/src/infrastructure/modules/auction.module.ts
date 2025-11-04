import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auction } from '../../domain/entities/auction.entity';
import { AuctionService } from '../../application/services/auction.service';
import { AuctionController } from '../controllers/auction.controller';
import { TypeOrmAuctionRepository } from '../persistence/repositories/auction.repository';
import { IAuctionRepository } from '../../domain/repositories/auction.repository.interface';
import { AuthModule } from './auth.module';
import { UploadModule } from './upload.module';

@Module({
  imports: [TypeOrmModule.forFeature([Auction]), AuthModule, UploadModule],
  controllers: [AuctionController],
  providers: [
    AuctionService,
    {
      provide: IAuctionRepository,
      useClass: TypeOrmAuctionRepository,
    },
  ],
  exports: [AuctionService],
})
export class AuctionModule {}
