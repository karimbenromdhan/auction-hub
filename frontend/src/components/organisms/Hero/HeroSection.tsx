import { WaveDivider, HeroBackground } from '../../atoms';
import { HeroVisual, HeroContent } from '../../molecules';
import { HeroSectionProps } from '@/interfaces/organisms';

function HeroSection({ activeAuctionsCount = 0 }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
      <HeroBackground />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent activeAuctionsCount={activeAuctionsCount} />
          <HeroVisual />
        </div>
      </div>

      <WaveDivider />
    </div>
  );
}

export default HeroSection;
