import { useNavigate } from 'react-router-dom';
import { Text, Button, Card } from '../atoms';
import { ROUTES } from '../../utils';
import { RouteErrorBoundaryProps } from '../../interfaces/common-components';

function RouteErrorBoundary({ error, resetErrorBoundary }: RouteErrorBoundaryProps) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    resetErrorBoundary();
    navigate(ROUTES.HOME);
  };

  const handleRetry = () => {
    resetErrorBoundary();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card padding="lg" className="max-w-2xl w-full">
        <div className="text-center">
=          <div className="mb-6">
            <svg
              className="w-20 h-20 text-red-500 mx-auto"
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

          <Text variant="h2" className="mb-4">
            Oops! Something went wrong
          </Text>
          <Text variant="body" color="secondary" className="mb-2">
            We encountered an unexpected error while loading this page.
          </Text>
          
          {error?.message && (
            <Text variant="small" className="text-red-600 mb-6 font-mono bg-red-50 p-3 rounded-lg">
              {error.message}
            </Text>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleRetry} variant="primary">
              Try Again
            </Button>
            <Button onClick={handleGoHome} variant="outline">
              Go to Homepage
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default RouteErrorBoundary;
