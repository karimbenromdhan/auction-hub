import React from 'react';
import { Text, Button } from '../atoms';
import { EmptyStateProps } from './types';

function EmptyState({ icon, title, description, action, className = '' }: EmptyStateProps) {
  const ActionButton = action?.to ? 'a' : 'button';
  
  return (
    <div className={`text-center ${className}`}>
      <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
        <Text variant="h3" weight="bold" className="mb-2 text-gray-900">
          {title}
        </Text>
        <Text variant="body" color="secondary" className="mb-6">
          {description}
        </Text>
        {action && (
          <Button 
            variant="primary" 
            size="lg" 
            className="shadow-md hover:shadow-lg transition-shadow"
            onClick={action.onClick}
          >
            <span className="flex items-center gap-2">
              {action.label}
            </span>
          </Button>
        )}
      </div>
    </div>
  );
}

export default EmptyState;
