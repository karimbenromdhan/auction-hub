import { TrustIndicator } from "../../atoms";

function TrustBadges() {
  const trustItems = [
    'No Credit Card Required',
    'Free to Join',
    'Cancel Anytime'
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/20">
      {trustItems.map((item) => (
        <TrustIndicator key={item} text={item} />
      ))}
    </div>
  );
}

export default TrustBadges;
