import { Pagination } from '../../organisms';
import { AuctionsSectionHeader } from '../../organisms';
import { SectionBackground } from '../../atoms';
import { EmptyAuctionsCTA } from '../../molecules';
import { ActiveAuctionsSectionProps } from '../../../interfaces';
import { AuctionList } from '../../../components/templates';

function ActiveAuctionsSection({ data, isLoading, error, page, onPageChange }: ActiveAuctionsSectionProps) {
  return (
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionBackground />
      
      <AuctionsSectionHeader totalAuctions={data?.total || 0} />

      <div className="relative">
        <AuctionList 
          auctions={data?.data} 
          isLoading={isLoading} 
          error={error}
          emptyMessage="No active auctions at the moment"
        />
      </div>

      <Pagination 
        currentPage={page}
        totalPages={data?.totalPages || 1}
        onPageChange={onPageChange}
      />

      {!isLoading && (!data?.data || data.data.length === 0) && (
        <EmptyAuctionsCTA />
      )}
    </div>
  );
}

export default ActiveAuctionsSection;
