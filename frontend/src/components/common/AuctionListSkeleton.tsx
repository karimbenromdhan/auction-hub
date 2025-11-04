import React from 'react';
import Skeleton from './Skeleton';

function AuctionListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Image skeleton */}
          <Skeleton height={192} className="w-full" />
          
          {/* Content skeleton */}
          <div className="p-4 space-y-3">
            {/* Title */}
            <Skeleton height={24} className="w-3/4" />
            
            {/* Price */}
            <Skeleton height={20} className="w-1/2" />
            
            {/* Timer */}
            <Skeleton height={16} className="w-2/3" />
            
            {/* Button */}
            <Skeleton height={40} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AuctionListSkeleton;
