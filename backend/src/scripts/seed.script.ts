import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { seedDatabase } from '../infrastructure/database/seed';
import { User } from '../domain/entities/user.entity';
import { Auction } from '../domain/entities/auction.entity';
import { Bid } from '../domain/entities/bid.entity';

// Load environment variables
config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '5432'),
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  database: process.env.DATABASE_NAME || 'auction_db',
  entities: [User, Auction, Bid],
  synchronize: false,
});

async function runSeed() {
  try {
    console.log('🔌 Connecting to database...');
    await AppDataSource.initialize();
    console.log('✅ Database connected');

    await seedDatabase(AppDataSource);

    await AppDataSource.destroy();
    console.log('✅ Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

runSeed();
