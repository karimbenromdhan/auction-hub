import { Link } from 'react-router-dom';
import { Button } from '../atoms';
import { ROUTES } from '../../utils';

function LoginButton() {
  return (
    <Link to={ROUTES.LOGIN}>
      <Button 
        variant="outline" 
        size="sm" 
        className="hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 group/login"
      >
        <svg className="w-4 h-4 mr-1.5 group-hover/login:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
        Login
      </Button>
    </Link>
  );
}

export default LoginButton;
