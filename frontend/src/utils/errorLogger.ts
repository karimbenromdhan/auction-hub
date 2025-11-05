import React from 'react';

/**
 * Error Logger Utility
 * 
 * Single Responsibility: Handle error logging and reporting
 * Open/Closed: Easy to extend with new logging services (e.g., Sentry, LogRocket)
 */
export class ErrorLogger {
  /**
   * Log error to console
   * In production, this could be extended to send errors to a service like Sentry
   */
  static logError(error: Error, errorInfo: React.ErrorInfo): void {
    // Development logging
    if (process.env.NODE_ENV === 'development') {
      console.group('ErrorBoundary caught an error');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Component Stack:', errorInfo.componentStack);
      console.groupEnd();
    }

    // Production error tracking
    // TODO: Send to error tracking service (e.g., Sentry, LogRocket, DataDog)
    // Example:
    // Sentry.captureException(error, {
    //   contexts: {
    //     react: {
    //       componentStack: errorInfo.componentStack,
    //     },
    //   },
    // });
  }

  /**
   * Log error with custom context
   */
  static logErrorWithContext(
    error: Error, 
    errorInfo: React.ErrorInfo, 
    context?: Record<string, any>
  ): void {
    this.logError(error, errorInfo);
    
    if (context && process.env.NODE_ENV === 'development') {
      console.log('Additional Context:', context);
    }
  }
}
