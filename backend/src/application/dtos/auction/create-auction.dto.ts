import { IsString, IsNumber, IsDateString, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAuctionDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0, { message: 'Starting price must be a positive number' })
  startingPrice: number;

  @IsDateString()
  endTime: string;

  // Image will be handled by Multer, not in DTO
}
