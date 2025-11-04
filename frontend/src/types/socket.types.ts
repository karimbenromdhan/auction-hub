import { Bid } from './bid.types';

export interface SocketEvents {
  // Client to Server
  joinAuction: (data: { auctionId: string }) => void;
  leaveAuction: (data: { auctionId: string }) => void;
  placeBid: (data: { createBidDto: { auctionId: string; amount: number }; userId: string; token: string }) => void;

  // Server to Client
  joinedAuction: (data: { auctionId: string; message: string }) => void;
  leftAuction: (data: { auctionId: string; message: string }) => void;
  bidPlaced: (data: { bid: Bid; message: string }) => void;
  bidUpdate: (data: { bid: Bid; message: string }) => void;
  bidError: (data: { message: string }) => void;
  auctionEnded: (data: { auctionId: string; message: string }) => void;
}

export type SocketEventName = keyof SocketEvents;
