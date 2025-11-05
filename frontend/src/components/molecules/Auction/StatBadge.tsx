import { Text, DecorativeLayer } from '../../atoms';
import { StatBadgeProps } from '../../../interfaces/atoms';

function StatBadge({ icon, label, variant = 'default', animated = false }: StatBadgeProps) {
  if (variant === 'primary') {
    return (
      <div className="relative group">
        <DecorativeLayer className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity" />
        <div className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg">
          {animated && (
            <DecorativeLayer className="relative flex h-2.5 w-2.5">
              <DecorativeLayer className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <DecorativeLayer className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
            </DecorativeLayer>
          )}
          <Text as="span" className="text-sm text-white font-bold">{label}</Text>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
      {icon}
      <Text as="span" className="text-sm text-gray-700 font-medium">{label}</Text>
    </div>
  );
}

export default StatBadge;
