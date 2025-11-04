import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from '../../domain/entities/user.entity';
import { Auction } from '../../domain/entities/auction.entity';
import { Bid } from '../../domain/entities/bid.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [User, Auction, Bid],
        synchronize: false, // Disabled - tables already created
        logging: configService.get('NODE_ENV') === 'development',
        migrations: [__dirname + '/../persistence/migrations/**/*{.ts,.js}'],
        migrationsRun: false, // Run manually
      }),
    }),
  ],
})
export class DatabaseModule {}
