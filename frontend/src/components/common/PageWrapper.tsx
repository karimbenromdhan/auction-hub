import React from 'react';
import { PageWrapperProps } from './types';

function PageWrapper({ children, withDecorations = true, className = '' }: PageWrapperProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/40 ${className}`}>
      {children}
    </div>
  );
}

export default PageWrapper;
