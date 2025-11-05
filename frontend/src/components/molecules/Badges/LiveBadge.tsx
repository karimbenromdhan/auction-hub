import { LiveBadgeProps } from '../../../interfaces/atoms';
import { DecorativeLayer, Text } from '../../atoms';
function LiveBadge({ text = 'Live Auctions Available Now' }: LiveBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <DecorativeLayer className="relative flex h-2 w-2">
        <DecorativeLayer className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <DecorativeLayer className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </DecorativeLayer>
      <Text variant="small" className="text-white font-medium">
        {text}
      </Text>
    </div>
  );
}

export default LiveBadge;
