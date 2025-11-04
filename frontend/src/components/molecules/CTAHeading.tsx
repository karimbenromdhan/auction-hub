import { CTAHeadingProps } from '../../interfaces/molecules';

function CTAHeading({ title, description }: CTAHeadingProps) {
  return (
    <>
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
        {title}
      </h2>
      <p className="text-xl text-blue-100 mb-10 leading-relaxed">
        {description}
      </p>
    </>
  );
}

export default CTAHeading;
