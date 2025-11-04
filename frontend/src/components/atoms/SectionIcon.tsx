import { SectionIconProps } from '../../interfaces/atoms';

function SectionIcon({ icon, variant = 'primary' }: SectionIconProps) {
  const gradientColors = {
    primary: 'from-blue-600 to-indigo-600',
    success: 'from-green-600 to-emerald-600',
    warning: 'from-yellow-600 to-orange-600',
    danger: 'from-red-600 to-rose-600',
  };

  return (
    <div className="relative">
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientColors[variant]} rounded-xl blur-md opacity-30`}></div>
      <div className={`relative w-12 h-12 bg-gradient-to-br ${gradientColors[variant]} rounded-xl flex items-center justify-center shadow-lg`}>
        {icon}
      </div>
    </div>
  );
}

export default SectionIcon;
