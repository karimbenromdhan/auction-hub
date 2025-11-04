import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../domain/entities/user.entity';
import { AuthService } from '../../application/services/auth.service';
import { AuthController } from '../controllers/auth.controller';
import { JwtStrategy } from '../auth/jwt.strategy';
import { TypeOrmUserRepository } from '../persistence/repositories/user.repository';
import { IUserRepository } from '../../domain/repositories/user.repository.interface';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRATION') || '7d',
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    {
      provide: IUserRepository,
      useClass: TypeOrmUserRepository,
    },
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
