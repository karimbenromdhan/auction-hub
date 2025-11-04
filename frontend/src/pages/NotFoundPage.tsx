import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Button, Card } from '../components/atoms';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card padding="lg" className="max-w-md text-center">
        <div className="mb-6">
          <Text variant="h1" className="text-blue-600 mb-2">
            404
          </Text>
          <Text variant="h3" className="mb-4">
            Page Not Found
          </Text>
          <Text variant="body" color="secondary">
            The page you're looking for doesn't exist or has been moved.
          </Text>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => navigate(-1)} variant="outline">
            Go Back
          </Button>
          <Button onClick={() => navigate('/')} variant="primary">
            Go Home
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default NotFoundPage;
