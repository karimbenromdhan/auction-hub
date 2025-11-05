import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DecorativeLayer } from '../components/atoms';
import { AuctionList } from '../components/templates';
import { useMyAuctions } from '../hooks';
import { ROUTES, isAuctionActive } from '../utils';
import PageWrapper from '../components/common/PageWrapper';
import PageHero from '../components/common/PageHero';
import ContentSection from '../components/common/ContentSection';
import EmptyState from '../components/common/EmptyState';
import ShimmerButton from '../components/common/ShimmerButton';

function MyAuctionsPage() {
  const navigate = useNavigate();
  const { data: auctions, isLoading, error } = useMyAuctions();

  const stats = useMemo(() => {
    if (!auctions) return [];
    
    const active = auctions.filter(auction => isAuctionActive(auction.endTime)).length;
    const ended = auctions.length - active;
    
    return [
      {
        icon: (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        ),
        label: 'Total',
        value: auctions.length,
        variant: 'default' as const,
      },
      {
        icon: (
          <DecorativeLayer className="relative flex h-2 w-2">
            <DecorativeLayer className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <DecorativeLayer className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </DecorativeLayer>
        ),
        label: 'Active',
        value: active,
        variant: 'success' as const,
      },
      {
        icon: (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ),
        label: 'Ended',
        value: ended,
        variant: 'default' as const,
      },
    ];
  }, [auctions]);

  return (
    <PageWrapper>
      <PageHero
        badge={{
          icon: (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          ),
          text: 'Your Dashboard',
        }}
        title="My Auctions"
        subtitle="Manage and track all your auction listings in one place"
        stats={stats}
        action={
          <ShimmerButton
            to={ROUTES.CREATE_AUCTION}
            icon={
              <svg className="w-5 h-5 text-blue-600 group-hover/shimmer:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            }
            iconPosition="left"
          >
            Create New Auction
          </ShimmerButton>
        }
      />

      <ContentSection>
        <AuctionList 
          auctions={auctions} 
          isLoading={isLoading} 
          error={error}
          emptyMessage="You haven't created any auctions yet"
        />

        {!isLoading && (!auctions || auctions.length === 0) && (
          <EmptyState
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            }
            title="Create Your First Auction"
            description="Start selling your items by creating your first auction listing"
            action={{
              label: 'Create Auction',
              onClick: () => navigate(ROUTES.CREATE_AUCTION),
            }}
            className="mt-12"
          />
        )}
      </ContentSection>
    </PageWrapper>
  );
}

export default MyAuctionsPage;
