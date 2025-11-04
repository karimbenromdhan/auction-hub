import { HeroStatsProps } from '../../interfaces/molecules';

function HeroStats({ activeAuctionsCount = 0 }: HeroStatsProps) {
  const stats = [
    {
      value: `${activeAuctionsCount}+`,
      label: 'Active Auctions',
    },
    {
      value: '24/7',
      label: 'Live Bidding',
    },
    {
      value: '100%',
      label: 'Secure',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="text-3xl font-bold text-white mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-blue-200">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;
