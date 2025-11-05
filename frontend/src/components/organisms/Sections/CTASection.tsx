import { CTABackground } from '../../atoms';
import { CTABadge, CTAHeading, TrustBadges, CTAButtons } from '../../molecules';

function CTASection() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-20 overflow-hidden">
      <CTABackground />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <CTABadge />
          
          <CTAHeading
            title="Ready to Start Bidding?"
            description="Join thousands of satisfied users and discover amazing deals on unique items. Create your account in seconds and start bidding now!"
          />

          <CTAButtons />

          <TrustBadges />
        </div>
      </div>
    </div>
  );
}

export default CTASection;
