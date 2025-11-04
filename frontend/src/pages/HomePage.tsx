import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Text, Button } from '../components/atoms';
import { AuctionList } from '../components/organisms';
import { useActiveAuctions } from '../hooks';
import { ROUTES } from '../utils';

function HomePage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useActiveAuctions({ page, limit: 9 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/40">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-60 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-32 right-1/3 w-72 h-72 bg-indigo-500/25 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <Text variant="small" className="text-white font-medium">
                  Live Auctions Available Now
                </Text>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Bid, Win,
                </span>
                <span className="block mt-2 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Own Amazing Items
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                Join thousands of bidders in real-time auctions. Discover unique treasures, place your bids, and win incredible deals.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                <Link to={ROUTES.AUCTIONS}>
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="relative overflow-hidden bg-white hover:bg-gray-50 shadow-2xl hover:shadow-3xl transition-all duration-300 group/cta border-0 px-8 py-4"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transform -skew-x-12 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700"></span>
                    <span className="relative flex items-center gap-2 font-semibold text-blue-600">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Browse Auctions
                      <svg className="w-5 h-5 text-blue-600 group-hover/cta:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Button>
                </Link>
                <Link to={ROUTES.CREATE_AUCTION}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover:border-white/50 shadow-lg transition-all duration-300 group/create px-8 py-4"
                  >
                    <span className="flex items-center gap-2 font-semibold">
                      <svg className="w-5 h-5 group-hover/create:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Create Auction
                    </span>
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {data?.total || 0}+
                  </div>
                  <div className="text-sm text-blue-200">Active Auctions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-blue-200">Live Bidding</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-blue-200">Secure</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:block relative animate-in fade-in slide-in-from-right duration-1000 delay-300">
              <div className="relative">
                {/* Floating Cards */}
                <div className="absolute -top-8 -left-8 w-64 h-80 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500"></div>
                <div className="absolute top-0 left-0 w-64 h-80 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative w-64 h-80 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl p-6 transform hover:scale-105 transition-transform duration-500">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 rounded-full text-xs font-bold">
                    LIVE
                  </div>
                  <div className="w-full h-40 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-xl mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                    <div className="h-3 bg-white/10 rounded w-1/2"></div>
                    <div className="mt-6 pt-5 border-t border-white/20">
                      <div className="text-xs text-white/70 mb-2 uppercase tracking-wider">Current Bid</div>
                      <div className="text-2xl font-bold text-white">$1,250</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 fill-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>

      {/* Active Auctions Section */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full blur-3xl -z-10"></div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6">
          <div className="space-y-4">
            {/* Title with Accent */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-md opacity-30"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <Text variant="h2" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent font-bold">
                  Active Auctions
                </Text>
                <p className="text-sm text-gray-500 mt-1">Discover and bid on amazing items</p>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                  </span>
                  <Text variant="small" className="text-white font-bold">
                    {data?.total || 0} Live Auctions
                  </Text>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <Text variant="small" className="text-gray-700 font-medium">
                  Real-time Updates
                </Text>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <Text variant="small" className="text-gray-700 font-medium">
                  Ending Soon
                </Text>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <Link to={ROUTES.AUCTIONS}>
            <Button 
              variant="outline" 
              size="lg"
              className="relative overflow-hidden group/view hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 transform -skew-x-12 -translate-x-full group-hover/view:translate-x-full transition-transform duration-700"></span>
              <span className="relative flex items-center gap-2 font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                View All Auctions
                <svg className="w-5 h-5 group-hover/view:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
          </Link>
        </div>

        {/* Auctions Grid */}
        <div className="relative">
          <AuctionList 
            auctions={data?.data} 
            isLoading={isLoading} 
            error={error}
            emptyMessage="No active auctions at the moment"
          />
        </div>

        {/* Pagination */}
        {data && data.totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-16 pt-8 border-t border-gray-200">
            <Button
              variant="outline"
              disabled={page === 1}
              onClick={() => setPage(p => Math.max(1, p - 1))}
              className="group/prev disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span className="flex items-center gap-2 font-medium">
                <svg className="w-4 h-4 group-hover/prev:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </span>
            </Button>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl border border-blue-200 shadow-md">
                <Text variant="body" weight="bold" className="text-gray-800">
                  Page {page}
                </Text>
                <span className="text-gray-400 font-medium">of</span>
                <Text variant="body" weight="bold" className="text-gray-800">
                  {data.totalPages}
                </Text>
              </div>
            </div>
            
            <Button
              variant="outline"
              disabled={page === data.totalPages}
              onClick={() => setPage(p => Math.min(data.totalPages, p + 1))}
              className="group/next disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span className="flex items-center gap-2 font-medium">
                Next
                <svg className="w-4 h-4 group-hover/next:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Button>
          </div>
        )}

        {/* Call to Action - No Auctions */}
        {!isLoading && (!data?.data || data.data.length === 0) && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200 shadow-sm">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <Text variant="body" className="text-gray-700 font-medium">
                Be the first to create an auction!
              </Text>
            </div>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="relative bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-200 mb-4">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <Text variant="small" className="text-blue-700 font-semibold">
                Why Choose AuctionHub
              </Text>
            </div>
            <Text variant="h2" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent font-bold mb-4">
              Everything You Need to Bid & Win
            </Text>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Experience the most advanced auction platform with real-time bidding, secure transactions, and an intuitive interface.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <Text variant="h4" weight="bold" className="mb-3 text-gray-900">
                  Real-Time Bidding
                </Text>
                <p className="text-gray-600 leading-relaxed">
                  Place bids instantly with live updates. Never miss an opportunity with our lightning-fast bidding system.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <Text variant="h4" weight="bold" className="mb-3 text-gray-900">
                  Secure Transactions
                </Text>
                <p className="text-gray-600 leading-relaxed">
                  Your data and payments are protected with bank-level encryption and security protocols.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <Text variant="h4" weight="bold" className="mb-3 text-gray-900">
                  Instant Notifications
                </Text>
                <p className="text-gray-600 leading-relaxed">
                  Get notified immediately when you're outbid or when auctions you're watching are ending soon.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <Text variant="h4" weight="bold" className="mb-3 text-gray-900">
                  24/7 Availability
                </Text>
                <p className="text-gray-600 leading-relaxed">
                  Bid anytime, anywhere. Our platform is always available with round-the-clock support.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <Text variant="h4" weight="bold" className="mb-3 text-gray-900">
                  Detailed Analytics
                </Text>
                <p className="text-gray-600 leading-relaxed">
                  Track your bidding history, wins, and spending with comprehensive analytics and insights.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <Text variant="h4" weight="bold" className="mb-3 text-gray-900">
                  Community Driven
                </Text>
                <p className="text-gray-600 leading-relaxed">
                  Join thousands of active bidders and sellers in a thriving marketplace community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <Text variant="small" className="text-white font-medium">
                Start Your Journey Today
              </Text>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Bidding?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join thousands of satisfied users and discover amazing deals on unique items. Create your account in seconds and start bidding now!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ROUTES.REGISTER}>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="relative overflow-hidden bg-white hover:bg-gray-50 shadow-2xl hover:shadow-3xl transition-all duration-300 group/signup border-0 px-10 py-4"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transform -skew-x-12 -translate-x-full group-hover/signup:translate-x-full transition-transform duration-700"></span>
                  <span className="relative flex items-center gap-2 font-bold text-lg text-blue-600">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Get Started Free
                  </span>
                </Button>
              </Link>
              <Link to={ROUTES.AUCTIONS}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover:border-white/50 shadow-lg transition-all duration-300 px-10 py-4"
                >
                  <span className="flex items-center gap-2 font-bold text-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Explore Auctions
                  </span>
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <Text variant="small" className="text-white font-medium">
                  No Credit Card Required
                </Text>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <Text variant="small" className="text-white font-medium">
                  Free to Join
                </Text>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <Text variant="small" className="text-white font-medium">
                  Cancel Anytime
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
