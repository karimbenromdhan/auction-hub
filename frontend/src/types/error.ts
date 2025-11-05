
import { ApiError } from './api.types';

export const isApiError = (error: unknown): error is ApiError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    'statusCode' in error
  );
};

export const getErrorMessage = (error: unknown): string => {
  if (isApiError(error)) {
    if (Array.isArray(error.message)) {
      return error.message.join(', ');
    }
    return error.message;
  }
  
  if (error instanceof Error) {
    return error.message;
  }
  
  if (typeof error === 'string') {
    return error;
  }
  
  return 'An unexpected error occurred';
};
