import { SectionHeaderTitle, AuctionStatsBar, ViewAllAuctionsButton } from '../../molecules';
import { AuctionsSectionHeaderProps } from '@/interfaces/organisms';

function AuctionsSectionHeader({ totalAuctions = 0 }: AuctionsSectionHeaderProps) {
  const headerIcon = (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6">
      <div className="space-y-4">
        <SectionHeaderTitle
          icon={headerIcon}
          title="Active Auctions"
          subtitle="Discover and bid on amazing items"
        />
        <AuctionStatsBar totalAuctions={totalAuctions} />
      </div>
      <ViewAllAuctionsButton />
    </div>
  );
}

export default AuctionsSectionHeader;
