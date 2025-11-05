import { useAuth } from '../../../hooks';
import { Logo } from '../../molecules';
import { Navigation, AuthSection } from '../../organisms';

function Header() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white/80 border-b border-gray-200/60 sticky top-0 z-50 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <Navigation isAuthenticated={isAuthenticated} />
          <AuthSection 
            isAuthenticated={isAuthenticated} 
            user={user} 
            onLogout={logout} 
          />
        </div>
      </div>
    </header>
  );
}

export default Header;

