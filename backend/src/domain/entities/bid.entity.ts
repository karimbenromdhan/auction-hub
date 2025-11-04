import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { User } from './user.entity';
import { Auction } from './auction.entity';

@Entity('bid')
export class Bid {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  // Foreign key columns managed by TypeORM through relationships
  auctionId: string;
  userId: string;

  @Index()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  // Relationships - TypeORM will manage the foreign key columns
  @ManyToOne(() => Auction, (auction) => auction.bids, { 
    onDelete: 'CASCADE',
    nullable: false
  })
  @JoinColumn({ name: 'auction_id' })
  auction: Auction;

  @ManyToOne(() => User, (user) => user.bids, { 
    onDelete: 'CASCADE',
    nullable: false
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
