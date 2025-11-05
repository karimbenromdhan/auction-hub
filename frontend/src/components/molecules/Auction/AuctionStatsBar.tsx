import { AuctionStatsBarProps } from '../../../interfaces/molecules';
import StatBadge from './StatBadge';

function AuctionStatsBar({ totalAuctions = 0 }: AuctionStatsBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <StatBadge
        label={`${totalAuctions} Live Auctions`}
        variant="primary"
        animated={true}
      />

      <StatBadge
        icon={
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        }
        label="Real-time Updates"
        variant="default"
      />

      <StatBadge
        icon={
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
        label="Ending Soon"
        variant="default"
      />
    </div>
  );
}

export default AuctionStatsBar;
