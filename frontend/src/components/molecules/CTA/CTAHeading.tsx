import { Text } from '../../atoms';
import { CTAHeadingProps } from '../../../interfaces/molecules';

function CTAHeading({ title, description }: CTAHeadingProps) {
  return (
    <>
      <Text 
        as="h2" 
        className="text-4xl lg:text-5xl font-bold text-white mb-6"
      >
        {title}
      </Text>
      <Text 
        as="p" 
        className="text-xl text-blue-100 mb-10 leading-relaxed"
      >
        {description}
      </Text>
    </>
  );
}

export default CTAHeading;
