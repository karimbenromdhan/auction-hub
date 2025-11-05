import React from 'react';

export function logError(error: Error, errorInfo: React.ErrorInfo): void {
  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.group('ErrorBoundary caught an error');
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
    console.groupEnd();
  }
}
