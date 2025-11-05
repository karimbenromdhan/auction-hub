import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Card, DecorativeLayer } from '../components/atoms';
import { BidItem } from '../components/molecules';
import { useMyBids } from '../hooks';
import { ROUTES, isAuctionActive } from '../utils';
import LoadingSpinner from '../components/common/LoadingSpinner';
import PageWrapper from '../components/common/PageWrapper';
import PageHero from '../components/common/PageHero';
import ContentSection from '../components/common/ContentSection';
import EmptyState from '../components/common/EmptyState';
import ShimmerButton from '../components/common/ShimmerButton';
import { StatBadge } from '../interfaces/common-components';

function MyBidsPage() {
  const navigate = useNavigate();
  const { data: bids, isLoading, error } = useMyBids();

  const statsData = useMemo(() => {
    if (!bids) return { total: 0, active: 0, won: 0, outbid: 0 };
    
    const activeBids = bids.filter(bid => 
      bid.auction && isAuctionActive(bid.auction.endTime)
    );
    
    const wonBids = bids.filter(bid => 
      bid.auction && !isAuctionActive(bid.auction.endTime) && 
      bid.amount === bid.auction.currentPrice
    );
    
    const outbidBids = bids.filter(bid => 
      bid.auction && isAuctionActive(bid.auction.endTime) && 
      bid.amount < bid.auction.currentPrice
    );
    
    return {
      total: bids.length,
      active: activeBids.length,
      won: wonBids.length,
      outbid: outbidBids.length
    };
  }, [bids]);

  const stats = useMemo(() => {
    const badges: StatBadge[] = [
      {
        icon: (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        ),
        label: 'Total Bids',
        value: statsData.total,
        variant: 'default' as const,
      },
      {
        icon: (
          <DecorativeLayer className="relative flex h-2 w-2">
            <DecorativeLayer className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <DecorativeLayer className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
          </DecorativeLayer>
        ),
        label: 'Active',
        value: statsData.active,
        variant: 'info' as const,
      },
      {
        icon: (
          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        ),
        label: 'Won',
        value: statsData.won,
        variant: 'success' as const,
      },
    ];

    if (statsData.outbid > 0) {
      badges.push({
        icon: (
          <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        ),
        label: 'Outbid',
        value: statsData.outbid,
        variant: 'warning' as const,
      });
    }

    return badges;
  }, [statsData]);

  if (isLoading) {
    return (
      <PageWrapper>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <LoadingSpinner size="lg" />
            <Text variant="body" className="mt-4 text-gray-600">
              Loading your bids...
            </Text>
          </div>
        </div>
      </PageWrapper>
    );
  }

  if (error) {
    return (
      <PageWrapper>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Card padding="lg" className="max-w-md text-center shadow-xl">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <Text variant="h3" className="mb-2 text-gray-900">
              Failed to Load Bids
            </Text>
            <Text variant="body" color="secondary" className="mb-6">
              Please try again later
            </Text>
          </Card>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <PageHero
        badge={{
          icon: (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          text: 'Your Activity',
        }}
        title="My Bids"
        subtitle="Track all your bidding activity and auction participation"
        stats={stats}
        action={
          <ShimmerButton
            to={ROUTES.AUCTIONS}
            icon={
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
            iconPosition="left"
          >
            Browse Auctions
          </ShimmerButton>
        }
      />

      <ContentSection maxWidth="lg">
        {!bids || bids.length === 0 ? (
          <EmptyState
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="No Bids Yet"
            description="Start bidding on auctions to see your activity here"
            action={{
              label: 'Browse Auctions',
              onClick: () => navigate(ROUTES.AUCTIONS),
            }}
          />
        ) : (
          <div className="space-y-4">
            {bids.map((bid) => (
              <div
                key={bid.id}
                onClick={() => navigate(`/auctions/${bid.auctionId || bid.auction?.id}`)}
                className="cursor-pointer transform transition-all duration-200 hover:scale-[1.01]"
              >
                <BidItem bid={bid} />
              </div>
            ))}
          </div>
        )}
      </ContentSection>
    </PageWrapper>
  );
}

export default MyBidsPage;
