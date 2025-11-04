import React, { ReactNode } from 'react';
import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { Button, Text } from '../atoms';

interface CustomErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * ErrorFallback Component
 * 
 * Functional component that displays when an error is caught
 */
const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/', { replace: true });
    resetErrorBoundary();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
          <svg
            className="w-6 h-6 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <Text variant="h3" className="mt-4 text-center">
          Something went wrong
        </Text>
        <Text variant="small" color="secondary" className="mt-2 text-center">
          {error?.message || 'An unexpected error occurred'}
        </Text>
        <Button
          onClick={resetErrorBoundary}
          variant="primary"
          fullWidth
          className="mt-6"
        >
          Try Again
        </Button>
        <Button
          onClick={handleGoHome}
          variant="outline"
          fullWidth
          className="mt-2"
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
};

/**
 * ErrorBoundary Component
 * 
 * Functional component wrapper using react-error-boundary library
 * This allows us to use a functional component instead of a class component
 */
const ErrorBoundary = ({ children, fallback }: CustomErrorBoundaryProps) => {
  const handleError = (error: Error, info: React.ErrorInfo) => {
    // Log error to console or send to error tracking service
    console.error('ErrorBoundary caught an error:', error, info);
  };

  return (
    <ReactErrorBoundary
      FallbackComponent={fallback ? () => <>{fallback}</> : ErrorFallback}
      onError={handleError}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
