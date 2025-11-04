import { Link } from 'react-router-dom';
import { Button } from '../atoms';
import { ROUTES } from '../../utils';

function ViewAllAuctionsButton() {
  return (
    <Link to={ROUTES.AUCTIONS}>
      <Button 
        variant="outline" 
        size="lg"
        className="relative overflow-hidden group/view hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 transform -skew-x-12 -translate-x-full group-hover/view:translate-x-full transition-transform duration-700"></span>
        <span className="relative flex items-center gap-2 font-semibold">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          View All Auctions
          <svg className="w-5 h-5 group-hover/view:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </Button>
    </Link>
  );
}

export default ViewAllAuctionsButton;
