import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { ROUTES } from '../../utils';
import LoadingSpinner from './LoadingSpinner';
import { ProtectedRouteProps } from '@/interfaces';

function ProtectedRoute(props: ProtectedRouteProps) {
  const { children } = props;
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" message="Checking authentication..." />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
