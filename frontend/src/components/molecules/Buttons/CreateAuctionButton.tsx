import { Link } from 'react-router-dom';
import { Button, Text, DecorativeLayer } from '../../atoms';
import { ROUTES } from '../../../utils';

function CreateAuctionButton() {
  return (
    <Link to={ROUTES.CREATE_AUCTION}>
      <Button
        variant="primary"
        size="sm"
        className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group/btn bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
      >
        <DecorativeLayer className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
        <Text as="span" className="relative flex items-center gap-2 text-white">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Create Auction
        </Text>
      </Button>
    </Link>
  );
}

export default CreateAuctionButton;
