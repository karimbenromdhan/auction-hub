import { lazy, Suspense, useEffect } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { queryClient } from './config/queryClient';
import { ROUTES } from './utils';
import { setNavigationCallback } from './services/api';
import ErrorBoundary from './components/common/ErrorBoundary';
import RouteErrorBoundary from './components/common/RouteErrorBoundary';
import ProtectedRoute from './components/common/ProtectedRoute';
import LoadingSpinner from './components/common/LoadingSpinner';
import { Header, ToastContainer } from './components/organisms';

// Code splitting: Lazy load all pages
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const AuctionListPage = lazy(() => import('./pages/AuctionListPage'));
const AuctionDetailPage = lazy(() => import('./pages/AuctionDetailPage'));
const CreateAuctionPage = lazy(() => import('./pages/CreateAuctionPage'));
const MyAuctionsPage = lazy(() => import('./pages/MyAuctionsPage'));
const MyBidsPage = lazy(() => import('./pages/MyBidsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    // Set up navigation callback for API interceptor
    setNavigationCallback((path: string) => {
      navigate(path);
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ReactErrorBoundary FallbackComponent={RouteErrorBoundary}>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <LoadingSpinner size="lg" message="Loading page..." />
            </div>
          }
        >
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.AUCTIONS} element={<AuctionListPage />} />
            <Route path="/auctions/:id" element={<AuctionDetailPage />} />
            
            {/* Protected Routes */}
            <Route
              path={ROUTES.CREATE_AUCTION}
              element={
                <ProtectedRoute>
                  <CreateAuctionPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={ROUTES.MY_AUCTIONS}
              element={
                <ProtectedRoute>
                  <MyAuctionsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={ROUTES.MY_BIDS}
              element={
                <ProtectedRoute>
                  <MyBidsPage />
                </ProtectedRoute>
              }
            />
            
            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ReactErrorBoundary>
      <ToastContainer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppContent />
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
