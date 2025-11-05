import api from './api';
import {
  Auction,
  CreateAuctionData,
  UpdateAuctionData,
  PaginatedAuctions,
  PaginationParams,
} from '../types';

export const auctionService = {
  getAll: async (params?: PaginationParams): Promise<PaginatedAuctions> => {
    const response = await api.get<PaginatedAuctions>('/auctions', { params });
    return response.data;
  },

  getActive: async (params?: PaginationParams): Promise<PaginatedAuctions> => {
    const response = await api.get<PaginatedAuctions>('/auctions/active', { params });
    return response.data;
  },

  getById: async (id: string): Promise<Auction> => {
    const response = await api.get<Auction>(`/auctions/${id}`);
    return response.data;
  },

  getMyAuctions: async (): Promise<Auction[]> => {
    const response = await api.get<Auction[]>('/auctions/user/me');
    return response.data;
  },

  create: async (data: CreateAuctionData): Promise<Auction> => {
    const formData = new FormData();
    formData.append('title', data.title);
    if (data.description) formData.append('description', data.description);
    formData.append('startingPrice', data.startingPrice.toString());
    formData.append('endTime', data.endTime);
    if (data.image) formData.append('image', data.image);

    const response = await api.post<Auction>('/auctions', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  update: async (id: string, data: UpdateAuctionData): Promise<Auction> => {
    const response = await api.put<Auction>(`/auctions/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/auctions/${id}`);
  },
};
