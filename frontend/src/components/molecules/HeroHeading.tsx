import { HeroHeadingProps } from '../../interfaces/molecules';

function HeroHeading({ title, subtitle }: HeroHeadingProps) {
  return (
    <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
      <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
        {title}
      </span>
      <span className="block mt-2 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
        {subtitle}
      </span>
    </h1>
  );
}

export default HeroHeading;
