import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuctionService } from '../../application/services/auction.service';
import { CreateAuctionDto } from '../../application/dtos/auction/create-auction.dto';
import { UpdateAuctionDto } from '../../application/dtos/auction/update-auction.dto';
import { PaginationQueryDto } from '../../application/dtos/auction/pagination-query.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@Controller('auctions')
export class AuctionController {
  constructor(private readonly auctionService: AuctionService) {}

  @Get()
  async getAllAuctions(@Query() paginationQuery: PaginationQueryDto) {
    return this.auctionService.getAllAuctions(paginationQuery);
  }

  @Get('active')
  async getActiveAuctions(@Query() paginationQuery: PaginationQueryDto) {
    return this.auctionService.getActiveAuctions(paginationQuery);
  }

  @Get('user/me')
  @UseGuards(JwtAuthGuard)
  async getMyAuctions(@CurrentUser() user: any) {
    return this.auctionService.getUserAuctions(user.id);
  }

  @Get(':id')
  async getAuctionById(@Param('id') id: string) {
    return this.auctionService.getAuctionById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  async createAuction(
    @Body() createAuctionDto: CreateAuctionDto,
    @CurrentUser() user: any,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    const imageUrl = file ? `/uploads/${file.filename}` : undefined;
    return this.auctionService.createAuction(createAuctionDto, user.id, imageUrl);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateAuction(
    @Param('id') id: string,
    @Body() updateAuctionDto: UpdateAuctionDto,
    @CurrentUser() user: any,
  ) {
    return this.auctionService.updateAuction(id, updateAuctionDto, user.id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteAuction(@Param('id') id: string, @CurrentUser() user: any) {
    await this.auctionService.deleteAuction(id, user.id);
    return { message: 'Auction deleted successfully' };
  }
}
