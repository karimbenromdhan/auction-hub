import { CreateAuctionButton, LogoutButton, UserMenu } from '../molecules';
import { AuthenticatedActionsProps } from '../../interfaces/organisms';

function AuthenticatedActions({ 
  user, 
  showUserMenu, 
  onToggleMenu, 
  onLogout 
}: AuthenticatedActionsProps) {
  return (
    <div className="flex items-center space-x-3">
      <CreateAuctionButton />
      
      <div className="flex items-center space-x-3 pl-3 ml-3 border-l-2 border-gray-200">
        <UserMenu
          email={user.email}
          isMenuOpen={showUserMenu}
          onToggle={onToggleMenu}
          onLogout={onLogout}
        />
        
        <LogoutButton onLogout={onLogout} />
      </div>
    </div>
  );
}

export default AuthenticatedActions;
