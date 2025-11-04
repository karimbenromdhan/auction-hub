import { CTABadge, CTAHeading, CTAButtons, TrustBadges } from '../molecules';

function CTAContent() {
  return (
    <div className="max-w-3xl mx-auto">
      <CTABadge />
      
      <CTAHeading
        title="Ready to Start Bidding?"
        description="Join thousands of satisfied users and discover amazing deals on unique items. Create your account in seconds and start bidding now!"
      />

      <CTAButtons />

      <TrustBadges />
    </div>
  );
}

export default CTAContent;
