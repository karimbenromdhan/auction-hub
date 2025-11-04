import { IsString, IsNumber, IsDateString, IsOptional, Min } from 'class-validator';

export class UpdateAuctionDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  startingPrice?: number;

  @IsDateString()
  @IsOptional()
  endTime?: string;
}
