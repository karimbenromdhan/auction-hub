import { Link } from 'react-router-dom';
import { Text } from '../../atoms';
import { ROUTES } from '../../../utils';
import { LogoProps } from '../../../interfaces/molecules';

function Logo({ showTagline = true }: LogoProps) {
  return (
    <Link 
      to={ROUTES.HOME} 
      className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
        <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-2.5 rounded-xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-3">
          <svg className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <Text as="span" className="text-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-indigo-700 group-hover:to-purple-700 transition-all duration-300">
          AuctionHub
        </Text>
        {showTagline && (
          <Text as="span" className="text-xs text-gray-500 font-medium -mt-1 group-hover:text-gray-700 transition-colors">
            Live Bidding Platform
          </Text>
        )}
      </div>
    </Link>
  );
}

export default Logo;
