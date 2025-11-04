import { Link } from 'react-router-dom';
import { Button } from '../atoms';
import { ROUTES } from '../../utils';

function HeroCTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
      <Link to={ROUTES.AUCTIONS}>
        <Button 
          variant="primary" 
          size="lg" 
          className="relative overflow-hidden bg-white hover:bg-gray-50 shadow-2xl hover:shadow-3xl transition-all duration-300 group/cta border-0 px-8 py-4"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transform -skew-x-12 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700"></span>
          <span className="relative flex items-center gap-2 font-semibold text-blue-600">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Browse Auctions
            <svg className="w-5 h-5 text-blue-600 group-hover/cta:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </Button>
      </Link>
      <Link to={ROUTES.CREATE_AUCTION}>
        <Button 
          variant="outline" 
          size="lg" 
          className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover:border-white/50 shadow-lg transition-all duration-300 group/create px-8 py-4"
        >
          <span className="flex items-center gap-2 font-semibold">
            <svg className="w-5 h-5 group-hover/create:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Auction
          </span>
        </Button>
      </Link>
    </div>
  );
}

export default HeroCTAButtons;
