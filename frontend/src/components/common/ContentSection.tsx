import { ContentSectionProps } from '../../interfaces/common-components';
import { MAX_WIDTH_CLASSES } from './constants';

function ContentSection({ 
  children, 
  withDecorations = true, 
  maxWidth = 'full',
  className = '' 
}: ContentSectionProps) {
  return (
    <div className={`relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 ${className}`}>
      {withDecorations && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full blur-3xl -z-10"></div>
        </>
      )}

      <div className={maxWidth !== 'full' ? `${MAX_WIDTH_CLASSES[maxWidth]} mx-auto` : ''}>
        {children}
      </div>
    </div>
  );
}

export default ContentSection;
