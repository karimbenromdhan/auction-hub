import { Button } from '../../atoms';
import { LogoutButtonProps } from '../../../interfaces/molecules';

function LogoutButton({ onLogout }: LogoutButtonProps) {
  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={onLogout}
      className="lg:hidden hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-all duration-200 group/logout"
    >
      <svg className="w-4 h-4 mr-1.5 group-hover/logout:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
      Logout
    </Button>
  );
}

export default LogoutButton;
