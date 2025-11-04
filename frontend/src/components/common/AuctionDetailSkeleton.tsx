import React from 'react';
import Skeleton from './Skeleton';

function AuctionDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image */}
            <Skeleton height={384} className="w-full rounded-lg" />
            
            {/* Title */}
            <Skeleton height={32} className="w-3/4" />
            
            {/* Description */}
            <div className="space-y-2">
              <Skeleton height={16} className="w-full" />
              <Skeleton height={16} className="w-full" />
              <Skeleton height={16} className="w-2/3" />
            </div>
            
            {/* Details */}
            <div className="grid grid-cols-2 gap-4">
              <Skeleton height={80} className="rounded-lg" />
              <Skeleton height={80} className="rounded-lg" />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Bid form */}
            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
              <Skeleton height={24} className="w-1/2" />
              <Skeleton height={48} className="w-full" />
              <Skeleton height={48} className="w-full" />
            </div>
            
            {/* Bid history */}
            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
              <Skeleton height={24} className="w-1/2" />
              {[...Array(5)].map((_, index) => (
                <Skeleton key={index} height={60} className="w-full rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionDetailSkeleton;
