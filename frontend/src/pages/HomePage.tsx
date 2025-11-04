import { useState } from 'react';
import { 
  HeroSection, 
  ActiveAuctionsSection, 
  FeaturesSection, 
  CTASection 
} from '../components/organisms';
import { useActiveAuctions } from '../hooks';

function HomePage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useActiveAuctions({ page, limit: 9 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/40">
      <HeroSection activeAuctionsCount={data?.total || 0} />
      <ActiveAuctionsSection 
        data={data}
        isLoading={isLoading}
        error={error}
        page={page}
        onPageChange={setPage}
      />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}

export default HomePage;
