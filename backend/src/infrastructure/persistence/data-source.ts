import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import * as path from 'path';

// Load environment variables
config();

// Determine if running in production (compiled dist) or development (TS source)
const isProduction = process.env.NODE_ENV === 'production';
const migrationsPath = isProduction
  ? 'dist/infrastructure/persistence/migrations/**/*.js'
  : 'src/infrastructure/persistence/migrations/**/*.ts';
const entitiesPath = isProduction
  ? 'dist/domain/entities/**/*.entity.js'
  : 'src/domain/entities/**/*.entity.ts';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '5432'),
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  database: process.env.DATABASE_NAME || 'auction_db',
  entities: [entitiesPath],
  migrations: [migrationsPath],
  synchronize: false,
  logging: process.env.NODE_ENV === 'development',
});
