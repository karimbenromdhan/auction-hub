import { Text, Button } from '../../atoms';
import { UserDropdownMenuProps } from '../../../interfaces/molecules';

function UserDropdownMenu({ email, onLogout, isVisible }: UserDropdownMenuProps) {
  if (!isVisible) return null;

  return (
    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="px-4 py-3 border-b border-gray-100">
        <Text variant="small" className="text-gray-500 text-xs mt-0.5">
          {email}
        </Text>
      </div>
      <Button
        onClick={onLogout}
        className="w-full px-4 py-2.5 text-left text-sm font-medium text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2 mt-1"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Logout
      </Button>
    </div>
  );
}

export default UserDropdownMenu;
