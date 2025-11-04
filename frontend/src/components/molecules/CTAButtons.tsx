import { GetStartedButton, ExploreAuctionsButton } from '../molecules';

function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <GetStartedButton />
      <ExploreAuctionsButton />
    </div>
  );
}

export default CTAButtons;
