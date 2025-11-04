import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import RouteErrorBoundary from '../components/common/RouteErrorBoundary';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { routes } from './routes.config';

function AppRoutes() {
  return (
    <ReactErrorBoundary FallbackComponent={RouteErrorBoundary}>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <LoadingSpinner size="lg" message="Loading page..." />
          </div>
        }
      >
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </ReactErrorBoundary>
  );
}

export default AppRoutes;
