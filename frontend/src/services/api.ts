import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { ApiError } from '../types';
import { useAuthStore } from '../store/authStore';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

// Navigation callback for handling redirects
let navigationCallback: ((path: string) => void) | null = null;

export const setNavigationCallback = (callback: (path: string) => void) => {
  navigationCallback = callback;
};

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState().token;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiError>) => {
    if (error.response) {
      // Server responded with error
      const apiError: ApiError = error.response.data;

      // Handle 401 Unauthorized
      if (error.response.status === 401) {
        useAuthStore.getState().logout();

        // Redirect to login using navigation callback
        if (navigationCallback) {
          navigationCallback('/login');
        }
      }

      return Promise.reject(apiError);
    } else if (error.request) {
      return Promise.reject({
        message: 'Network error. Please check your connection.',
        statusCode: 0,
      });
    } else {
      return Promise.reject({
        message: error.message || 'An unexpected error occurred',
        statusCode: 0,
      });
    }
  }
);

export default api;
