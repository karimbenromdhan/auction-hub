import { useState } from 'react';
import { ImageProps } from '@/interfaces/atoms';

function Image(props: ImageProps) {
  const { src, alt, fallback = '/placeholder-image.jpg', className = '', loading = 'lazy', ...restProps } = props;
  const [imgSrc, setImgSrc] = useState(src || fallback);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setImgSrc(fallback);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <img
        src={imgSrc}
        alt={alt}
        loading={loading}
        onError={handleError}
        onLoad={handleLoad}
        className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ${className}`}
        {...restProps}
      />
    </div>
  );
}

export default Image;
