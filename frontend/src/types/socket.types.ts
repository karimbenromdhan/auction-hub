import { Bid } from './bid.types';

export interface SocketEvents {
  // Client to Server
  joinAuction: (data: { auctionId: string }) => void;
  leaveAuction: (data: { auctionId: string }) => void;
  placeBid: (data: { createBidDto: { auctionId: string; amount: number }; userId: string; token: string }) => void;

  // Server to Client
  bidUpdate: (data: { bid: Bid; message: string }) => void;
  auctionEnded: (data: { auctionId: string; message: string }) => void;
}

