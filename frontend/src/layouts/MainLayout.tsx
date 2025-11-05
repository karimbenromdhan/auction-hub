import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/templates';
import { ToastContainer } from '../components/organisms';
import { setNavigationCallback } from '../services/api';
import AppRoutes from '../routes/AppRoutes';
import { LayoutProps } from '../interfaces/common';

function MainLayout({ children }: LayoutProps) {
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
      {children || <AppRoutes />}
      <ToastContainer />
    </div>
  );
}

export default MainLayout;
