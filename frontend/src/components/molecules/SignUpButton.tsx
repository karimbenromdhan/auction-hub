import { Link } from 'react-router-dom';
import { Button } from '../atoms';
import { ROUTES } from '../../utils';

function SignUpButton() {
  return (
    <Link to={ROUTES.REGISTER}>
      <Button 
        variant="primary" 
        size="sm" 
        className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group/signup bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
      >
        <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/signup:translate-x-full transition-transform duration-700"></span>
        <span className="relative flex items-center gap-1.5">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          Sign Up
        </span>
      </Button>
    </Link>
  );
}

export default SignUpButton;
