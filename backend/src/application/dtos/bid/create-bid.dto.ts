import { IsString, IsNumber, Min } from 'class-validator';

export class CreateBidDto {
  @IsString()
  auctionId: string;

  @IsNumber()
  @Min(0, { message: 'Bid amount must be a positive number' })
  amount: number;
}
