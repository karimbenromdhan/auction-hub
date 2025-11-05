import { Text, DecorativeLayer } from '../../atoms';
import { FEATURES } from '../../../constants/features';
import { FeatureCard } from '../../molecules';

function FeaturesSection() {
  return (
    <div className="relative bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 py-20 overflow-hidden">
      {/* Background Elements */}
      <DecorativeLayer className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
      <DecorativeLayer className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-200 mb-4">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <Text variant="small" className="text-blue-700 font-semibold">
              Why Choose AuctionHub
            </Text>
          </div>
          <Text variant="h2" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent font-bold mb-4">
            Everything You Need to Bid & Win
          </Text>
          <Text as="p" className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience the most advanced auction platform with real-time bidding, secure transactions, and an intuitive interface.
          </Text>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
