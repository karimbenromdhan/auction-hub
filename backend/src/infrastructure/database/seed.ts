import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../../domain/entities/user.entity';
import { Auction } from '../../domain/entities/auction.entity';
import { Bid } from '../../domain/entities/bid.entity';

export async function seedDatabase(dataSource: DataSource) {
  console.log('🌱 Starting database seeding...');

  const userRepository = dataSource.getRepository(User);
  const auctionRepository = dataSource.getRepository(Auction);
  const bidRepository = dataSource.getRepository(Bid);

  // Clear existing data
  await bidRepository.delete({});
  await auctionRepository.delete({});
  await userRepository.delete({});

  console.log('✅ Cleared existing data');

  // Create users
  const hashedPassword = await bcrypt.hash('password123', 10);

  const user1 = await userRepository.save({
    email: 'john@example.com',
    password: hashedPassword,
  });

  const user2 = await userRepository.save({
    email: 'jane@example.com',
    password: hashedPassword,
  });

  const user3 = await userRepository.save({
    email: 'bob@example.com',
    password: hashedPassword,
  });

  console.log('✅ Created 3 users');

  // Create auctions
  const now = new Date();
  const futureDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
  const pastDate = new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000); // 1 day ago

  const auction1 = await auctionRepository.save({
    title: 'Vintage Rolex Watch',
    description: 'Rare vintage Rolex watch from 1960s in excellent condition',
    startingPrice: 5000,
    currentPrice: 5000,
    endTime: futureDate,
    ownerId: user1.id,
  });

  const auction2 = await auctionRepository.save({
    title: 'MacBook Pro 16" M3',
    description: 'Brand new MacBook Pro 16" with M3 chip, 32GB RAM, 1TB SSD',
    startingPrice: 2000,
    currentPrice: 2500,
    endTime: futureDate,
    ownerId: user1.id,
  });

  const auction3 = await auctionRepository.save({
    title: 'Antique Painting',
    description: 'Beautiful 19th century oil painting by unknown artist',
    startingPrice: 1000,
    currentPrice: 1800,
    endTime: futureDate,
    ownerId: user2.id,
  });

  const auction4 = await auctionRepository.save({
    title: 'Gaming PC Setup',
    description: 'High-end gaming PC with RTX 4090, i9-13900K, 64GB RAM',
    startingPrice: 3000,
    currentPrice: 3000,
    endTime: futureDate,
    ownerId: user2.id,
  });

  const auction5 = await auctionRepository.save({
    title: 'Vintage Guitar',
    description: 'Fender Stratocaster 1965 in mint condition',
    startingPrice: 8000,
    currentPrice: 8000,
    endTime: futureDate,
    ownerId: user3.id,
  });

  // Create one ended auction
  const auction6 = await auctionRepository.save({
    title: 'iPhone 15 Pro Max',
    description: 'Used iPhone 15 Pro Max 256GB - ENDED AUCTION',
    startingPrice: 800,
    currentPrice: 1200,
    endTime: pastDate,
    ownerId: user3.id,
  });

  console.log('✅ Created 6 auctions (5 active, 1 ended)');

  // Create bids
  await bidRepository.save({
    amount: 2500,
    auctionId: auction2.id,
    userId: user2.id,
  });

  await bidRepository.save({
    amount: 1200,
    auctionId: auction3.id,
    userId: user1.id,
  });

  await bidRepository.save({
    amount: 1500,
    auctionId: auction3.id,
    userId: user3.id,
  });

  await bidRepository.save({
    amount: 1800,
    auctionId: auction3.id,
    userId: user1.id,
  });

  await bidRepository.save({
    amount: 1200,
    auctionId: auction6.id,
    userId: user1.id,
  });

  console.log('✅ Created 5 bids');

  console.log('\n🎉 Database seeding completed successfully!\n');
  console.log('📝 Test Credentials:');
  console.log('   Email: john@example.com | Password: password123');
  console.log('   Email: jane@example.com | Password: password123');
  console.log('   Email: bob@example.com  | Password: password123\n');
}
