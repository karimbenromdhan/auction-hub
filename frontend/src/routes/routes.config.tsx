import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { ROUTES } from '../utils';
import ProtectedRoute from '../components/common/ProtectedRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const AuctionListPage = lazy(() => import('../pages/AuctionListPage'));
const AuctionDetailPage = lazy(() => import('../pages/AuctionDetailPage'));
const CreateAuctionPage = lazy(() => import('../pages/CreateAuctionPage'));
const MyAuctionsPage = lazy(() => import('../pages/MyAuctionsPage'));
const MyBidsPage = lazy(() => import('../pages/MyBidsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTES.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: ROUTES.AUCTIONS,
    element: <AuctionListPage />,
  },
  {
    path: '/auctions/:id',
    element: <AuctionDetailPage />,
  },
  // Protected Routes
  {
    path: ROUTES.CREATE_AUCTION,
    element: (
      <ProtectedRoute>
        <CreateAuctionPage />
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.MY_AUCTIONS,
    element: (
      <ProtectedRoute>
        <MyAuctionsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.MY_BIDS,
    element: (
      <ProtectedRoute>
        <MyBidsPage />
      </ProtectedRoute>
    ),
  },
  // 404
  {
    path: '*',
    element: <Navigate to="/404" replace />,
  },
  {
    path: '/404',
    element: <NotFoundPage />,
  }
];
