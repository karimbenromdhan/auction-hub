import { Text } from '../atoms';

function EmptyAuctionsCTA() {
  return (
    <div className="mt-12 text-center">
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200 shadow-sm">
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <Text variant="body" className="text-gray-700 font-medium">
          Be the first to create an auction!
        </Text>
      </div>
    </div>
  );
}

export default EmptyAuctionsCTA;
