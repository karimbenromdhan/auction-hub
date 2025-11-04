import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { BidService } from '../../application/services/bid.service';
import { CreateBidDto } from '../../application/dtos/bid/create-bid.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@Controller('bids')
export class BidController {
  constructor(private readonly bidService: BidService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async placeBid(@Body() createBidDto: CreateBidDto, @CurrentUser() user: any) {
    return this.bidService.placeBid(createBidDto, user.id);
  }

  @Get('auction/:auctionId')
  async getBidsByAuction(@Param('auctionId') auctionId: string) {
    return this.bidService.getBidsByAuction(auctionId);
  }

  @Get('user/me')
  @UseGuards(JwtAuthGuard)
  async getMyBids(@CurrentUser() user: any) {
    return this.bidService.getUserBids(user.id);
  }
}
