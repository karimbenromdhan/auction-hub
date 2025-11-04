import { ApiError } from '../types';

// Get error message from API error
export const getErrorMessage = (error: unknown): string => {
  if (typeof error === 'string') {
    return error;
  }

  if (error && typeof error === 'object' && 'message' in error) {
    const apiError = error as ApiError;
    if (Array.isArray(apiError.message)) {
      return apiError.message.join(', ');
    }
    return apiError.message;
  }

  return 'An unexpected error occurred';
};

// Get image URL
export const getImageUrl = (imageUrl?: string): string => {
  if (!imageUrl) {
    return '/placeholder-image.jpg';
  }
  
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
  return `${API_URL}${imageUrl}`;
};

// Check if auction is active
export const isAuctionActive = (endTime: string): boolean => {
  return new Date(endTime) > new Date();
};

// Generate unique ID
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Debounce function
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Throttle function
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Format file size
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
};
