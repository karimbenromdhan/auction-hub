import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  MessageBody,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger, UseGuards } from '@nestjs/common';
import { BidService, IBidGateway } from '../../application/services/bid.service';
import { CreateBidDto } from '../../application/dtos/bid/create-bid.dto';
import { WsJwtGuard } from '../../common/guards/ws-jwt.guard';
import { Bid } from '../../domain/entities/bid.entity';

@WebSocketGateway({
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  },
  namespace: '/auction',
})
export class BidGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, IBidGateway {
  @WebSocketServer()
  server: Server;

  private logger = new Logger('BidGateway');

  constructor(private readonly bidService: BidService) {}

  afterInit() {
    // Register this gateway with the service to avoid circular dependency
    this.bidService.setGateway(this);
    this.logger.log('BidGateway initialized and registered with BidService');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  // Implement IBidGateway interface
  emitBidUpdate(auctionId: string, bid: Bid) {
    this.server.to(`auction:${auctionId}`).emit('bidUpdate', {
      bid: {
        id: bid.id,
        amount: bid.amount,
        auctionId: bid.auctionId,
        userId: bid.userId,
        createdAt: bid.createdAt,
      },
      message: 'New bid placed',
    });
    this.logger.log(`Emitted bid update for auction ${auctionId}: $${bid.amount}`);
  }

  @SubscribeMessage('joinAuction')
  handleJoinAuction(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { auctionId: string },
  ) {
    const { auctionId } = data;
    client.join(`auction:${auctionId}`);
    this.logger.log(`Client ${client.id} joined auction ${auctionId}`);
    
    return {
      event: 'joinedAuction',
      data: { auctionId, message: 'Successfully joined auction room' },
    };
  }

  @SubscribeMessage('leaveAuction')
  handleLeaveAuction(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { auctionId: string },
  ) {
    const { auctionId } = data;
    client.leave(`auction:${auctionId}`);
    this.logger.log(`Client ${client.id} left auction ${auctionId}`);
    
    return {
      event: 'leftAuction',
      data: { auctionId, message: 'Successfully left auction room' },
    };
  }

  @SubscribeMessage('placeBid')
  @UseGuards(WsJwtGuard)
  async handlePlaceBid(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { createBidDto: CreateBidDto; userId: string },
  ) {
    try {
      const { createBidDto, userId } = data;
      
      // Place the bid
      const bid = await this.bidService.placeBid(createBidDto, userId);

      // Emit bid update to all clients in the auction room
      this.server.to(`auction:${createBidDto.auctionId}`).emit('bidUpdate', {
        bid: {
          id: bid.id,
          amount: bid.amount,
          auctionId: bid.auctionId,
          userId: bid.userId,
          createdAt: bid.createdAt,
        },
        message: 'New bid placed',
      });

      this.logger.log(
        `Bid placed: ${bid.amount} on auction ${createBidDto.auctionId} by user ${userId}`,
      );

      return {
        event: 'bidPlaced',
        data: { bid, message: 'Bid placed successfully' },
      };
    } catch (error) {
      this.logger.error(`Error placing bid: ${error.message}`);
      
      return {
        event: 'bidError',
        data: { message: error.message },
      };
    }
  }

  // Method to emit auction ended event (can be called from a scheduler)
  emitAuctionEnded(auctionId: string) {
    this.server.to(`auction:${auctionId}`).emit('auctionEnded', {
      auctionId,
      message: 'Auction has ended',
    });
    this.logger.log(`Auction ${auctionId} ended`);
  }
}
