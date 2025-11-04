import { LiveBadge } from '../atoms';
import { HeroHeading, HeroCTAButtons, HeroStats } from '../molecules';
import { HeroContentProps } from '../../interfaces/organisms';

function HeroContent({ activeAuctionsCount = 0 }: HeroContentProps) {
  return (
    <div className="max-w-2xl">
      <LiveBadge />
      
      <HeroHeading 
        title="Bid, Win,"
        subtitle="Own Amazing Items"
      />

      <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
        Join thousands of bidders in real-time auctions. Discover unique treasures, place your bids, and win incredible deals.
      </p>

      <HeroCTAButtons />
      
      <HeroStats activeAuctionsCount={activeAuctionsCount} />
    </div>
  );
}

export default HeroContent;
