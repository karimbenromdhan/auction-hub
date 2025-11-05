import { Link } from 'react-router-dom';
import { Button, Text, DecorativeLayer } from '../../atoms';
import { ROUTES } from '../../../utils';

function GetStartedButton() {
  return (
    <Link to={ROUTES.REGISTER}>
      <Button 
        variant="primary" 
        size="lg" 
        className="relative overflow-hidden bg-white hover:bg-gray-50 shadow-2xl hover:shadow-3xl transition-all duration-300 group/signup border-0 px-10 py-4"
      >
        <DecorativeLayer className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transform -skew-x-12 -translate-x-full group-hover/signup:translate-x-full transition-transform duration-700" />
        <Text as="span" className="relative flex items-center gap-2 font-bold text-lg text-blue-600">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          Get Started Free
        </Text>
      </Button>
    </Link>
  );
}

export default GetStartedButton;
