import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  Index,
} from 'typeorm';
import { User } from './user.entity';
import { Bid } from './bid.entity';

@Entity('auction')
export class Auction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ name: 'image_url', length: 500, nullable: true })
  imageUrl: string;

  @Column({ name: 'starting_price', type: 'decimal', precision: 10, scale: 2 })
  startingPrice: number;

  @Column({ name: 'current_price', type: 'decimal', precision: 10, scale: 2 })
  currentPrice: number;

  @Index()
  @Column({ name: 'end_time', type: 'timestamp' })
  endTime: Date;

  @Index()
  @Column({ name: 'owner_id' })
  ownerId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Relationships
  @ManyToOne(() => User, (user) => user.auctions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'owner_id' })
  owner: User;

  @OneToMany(() => Bid, (bid) => bid.auction)
  bids: Bid[];

  // Helper method to check if auction is active
  isActive(): boolean {
    return new Date() < this.endTime;
  }

  // Helper method to check if auction has ended
  hasEnded(): boolean {
    return new Date() >= this.endTime;
  }
}
