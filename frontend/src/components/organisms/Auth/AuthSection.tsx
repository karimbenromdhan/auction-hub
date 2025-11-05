import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthenticatedActions, GuestActions } from '../../organisms';
import { ROUTES } from '../../../utils';
import { AuthSectionProps } from '@/interfaces/organisms';

function AuthSection({ isAuthenticated, user, onLogout }: AuthSectionProps) {
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = useCallback(() => {
    onLogout();
    navigate(ROUTES.LOGIN);
    setShowUserMenu(false);
  }, [onLogout, navigate]);

  if (isAuthenticated && user) {
    return (
      <AuthenticatedActions
        user={user}
        showUserMenu={showUserMenu}
        onToggleMenu={() => setShowUserMenu(!showUserMenu)}
        onLogout={handleLogout}
      />
    );
  }

  return <GuestActions />;
}

export default AuthSection;
