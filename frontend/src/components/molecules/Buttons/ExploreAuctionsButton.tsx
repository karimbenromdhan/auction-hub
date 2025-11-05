import { Link } from 'react-router-dom';
import { Button, Text } from '../../atoms';
import { ROUTES } from '../../../utils';

function ExploreAuctionsButton() {
  return (
    <Link to={ROUTES.AUCTIONS}>
      <Button 
        variant="outline" 
        size="lg" 
        className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover:border-white/50 shadow-lg transition-all duration-300 px-10 py-4"
      >
        <Text as="span" className="flex items-center gap-2 font-bold text-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Explore Auctions
        </Text>
      </Button>
    </Link>
  );
}

export default ExploreAuctionsButton;
