export interface ApiError {
  statusCode: number;
  timestamp: string;
  path: string;
  method: string;
  message: string | string[];
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}
