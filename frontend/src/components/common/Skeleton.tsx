import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

const DEFAULT_SKELETON_PROPS = {
  variant: 'rectangular' as const,
  className: '',
} as const;

function Skeleton(props: SkeletonProps) {
  const { className, variant, width, height } = { ...DEFAULT_SKELETON_PROPS, ...props };
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };
  
  const style = {
    width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
  };
  
  return (
    <div
      className={`bg-gray-200 animate-pulse ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
}

export default Skeleton;
