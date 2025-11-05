import { io, Socket } from 'socket.io-client';
import { SocketEvents } from '../types';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:3001';

class SocketService {
  private socket: Socket | null = null;
  private token: string | null = null;

  // Initialize socket connection
  connect(token: string): Socket {
    if (this.socket?.connected) {
      return this.socket;
    }

    this.token = token;
    this.socket = io(`${SOCKET_URL}/auction`, {
      auth: {
        token,
      },
      transports: ['websocket', 'polling'],
    });

    this.socket.on('connect', () => {
      console.log('✅ Socket connected:', this.socket?.id);
    });

    this.socket.on('disconnect', () => {
      console.log('❌ Socket disconnected');
    });

    this.socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
    });

    return this.socket;
  }

  // Disconnect socket
  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  // Join auction room
  joinAuction(auctionId: string): void {
    if (!this.socket || !this.socket.connected) {
      console.warn('Socket not connected, cannot join auction');
      return;
    }
    this.socket.emit('joinAuction', { auctionId });
  }

  // Leave auction room
  leaveAuction(auctionId: string): void {
    if (!this.socket || !this.socket.connected) {
      return;
    }
    this.socket.emit('leaveAuction', { auctionId });
  }

  // Place bid via socket
  placeBid(auctionId: string, amount: number, userId: string): void {
    if (!this.socket || !this.token) {
      throw new Error('Socket not connected or token missing');
    }
    this.socket.emit('placeBid', {
      createBidDto: { auctionId, amount },
      userId,
      token: this.token,
    });
  }

  // Listen to events
  on<K extends keyof SocketEvents>(event: K, callback: SocketEvents[K]): void {
    if (!this.socket) {
      console.warn('Socket not connected, cannot add event listener');
      return;
    }
    this.socket.on(event as string, callback as any);
  }

  // Remove event listener
  off<K extends keyof SocketEvents>(event: K, callback?: SocketEvents[K]): void {
    if (!this.socket) {
      return;
    }
    this.socket.off(event as string, callback as any);
  }

  // Get socket instance
  getSocket(): Socket | null {
    return this.socket;
  }


}

export const socketService = new SocketService();
