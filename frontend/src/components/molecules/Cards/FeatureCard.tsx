import { Text } from '../../atoms';
import { FeatureCardProps } from '../../../interfaces/molecules';

function FeatureCard({ icon, title, description, gradientFrom, gradientTo }: FeatureCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative">
        <div className={`w-14 h-14 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <Text variant="h4" weight="bold" className="mb-3 text-gray-900">
          {title}
        </Text>
        <Text as="p" className="text-gray-600 leading-relaxed">
          {description}
        </Text>
      </div>
    </div>
  );
}

export default FeatureCard;
