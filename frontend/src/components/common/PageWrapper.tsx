import { PageWrapperProps } from '../../interfaces/common-components';

function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/40 ${className}`}>
      {children}
    </div>
  );
}

export default PageWrapper;
