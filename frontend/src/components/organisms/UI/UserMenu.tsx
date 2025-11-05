import { UserAvatar, UserDropdownMenu } from '../../molecules';
import { UserMenuProps } from '@/interfaces/molecules';

function UserMenu({ email, isMenuOpen, onToggle, onLogout }: UserMenuProps) {
  return (
    <div className="relative">
      <UserAvatar
        email={email}
        isMenuOpen={isMenuOpen}
        onToggle={onToggle}
      />
      
      <UserDropdownMenu
        email={email}
        onLogout={onLogout}
        isVisible={isMenuOpen}
      />
    </div>
  );
}

export default UserMenu;
