import api from './api';
import { Bid, CreateBidData } from '../types';

export const bidService = {
  // Place a bid
  placeBid: async (data: CreateBidData): Promise<Bid> => {
    const response = await api.post<Bid>('/bids', data);
    return response.data;
  },

  // Get bids for an auction
  getAuctionBids: async (auctionId: string): Promise<Bid[]> => {
    const response = await api.get<Bid[]>(`/bids/auction/${auctionId}`);
    return response.data;
  },

  // Get my bids
  getMyBids: async (): Promise<Bid[]> => {
    const response = await api.get<Bid[]>('/bids/user/me');
    return response.data;
  },
};
