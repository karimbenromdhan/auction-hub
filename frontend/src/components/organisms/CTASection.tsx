import { CTABackground } from '../molecules';
import { CTAContent } from '../organisms';

function CTASection() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-20 overflow-hidden">
      <CTABackground />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <CTAContent />
      </div>
    </div>
  );
}

export default CTASection;
