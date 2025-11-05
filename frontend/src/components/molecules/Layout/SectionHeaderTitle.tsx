import { Text } from '../../atoms';
import { SectionIcon } from '../../molecules';
import { SectionHeaderTitleProps } from '../../../interfaces/molecules';

function SectionHeaderTitle({ icon, title, subtitle }: SectionHeaderTitleProps) {
  return (
    <div className="flex items-center gap-4">
      <SectionIcon icon={icon} variant="primary" />
      <div>
        <Text variant="h2" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent font-bold">
          {title}
        </Text>
        <Text as="p" className="text-sm text-gray-500 mt-1">{subtitle}</Text>
      </div>
    </div>
  );
}

export default SectionHeaderTitle;
