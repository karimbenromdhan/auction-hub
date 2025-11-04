import api from './api';
import { AuthResponse, LoginCredentials, RegisterCredentials, User } from '../types';

export const authService = {
  // Register new user
  register: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/register', credentials);
    return response.data;
  },

  // Login user
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/login', credentials);
    return response.data;
  },

  // Get current user profile
  getProfile: async (): Promise<User> => {
    const response = await api.get<User>('/auth/profile');
    return response.data;
  },

  // Logout user (client-side) - Handled by Zustand store
  logout: () => {
    // Zustand store handles clearing the persisted state
  },

  // Store token - Handled by Zustand store
  setToken: (token: string) => {
    // Token is now managed by Zustand store
  },

  // Store user - Handled by Zustand store
  setUser: (user: User) => {
    // User is now managed by Zustand store
  },
};
