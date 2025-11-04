import React, { useCallback, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button, Text } from '../atoms';
import { useAuth } from '../../hooks';
import { ROUTES } from '../../utils';

function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = useCallback(() => {
    logout();
    navigate(ROUTES.LOGIN);
    setShowUserMenu(false);
  }, [logout, navigate]);

  const isActiveRoute = (route: string) => location.pathname === route;

  return (
    <header className="bg-white/80 border-b border-gray-200/60 sticky top-0 z-50 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to={ROUTES.HOME} 
            className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-2.5 rounded-xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-3">
                <svg className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-indigo-700 group-hover:to-purple-700 transition-all duration-300">
                AuctionHub
              </span>
              <span className="text-xs text-gray-500 font-medium -mt-1 group-hover:text-gray-700 transition-colors">Live Bidding Platform</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-gray-50/50 rounded-xl p-1.5 backdrop-blur-sm">
            <Link 
              to={ROUTES.AUCTIONS} 
              className={`relative px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                isActiveRoute(ROUTES.AUCTIONS)
                  ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-white hover:shadow-sm'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Browse
              </span>
            </Link>
            {isAuthenticated && (
              <>
                <Link 
                  to={ROUTES.MY_AUCTIONS} 
                  className={`relative px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    isActiveRoute(ROUTES.MY_AUCTIONS)
                      ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    My Auctions
                  </span>
                </Link>
                <Link 
                  to={ROUTES.MY_BIDS} 
                  className={`relative px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    isActiveRoute(ROUTES.MY_BIDS)
                      ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    My Bids
                  </span>
                </Link>
              </>
            )}
          </nav>

          {/* Auth Section */}
          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              <>
                <Link to={ROUTES.CREATE_AUCTION}>
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group/btn bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
                    <span className="relative flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Create Auction
                    </span>
                  </Button>
                </Link>
                <div className="flex items-center space-x-3 pl-3 ml-3 border-l-2 border-gray-200">
                  <div className="relative">
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="hidden lg:flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-gray-50 transition-all duration-200 group/user"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur opacity-40 group-hover/user:opacity-60 transition-opacity"></div>
                        <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg ring-2 ring-white group-hover/user:ring-blue-100 transition-all duration-300 group-hover/user:scale-110">
                          <span className="text-white text-sm font-bold">
                            {user?.email?.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                      </div>
                      <div className="text-left">
                        <Text variant="small" weight="bold" className="text-gray-900 group-hover/user:text-blue-600 transition-colors">
                          {user?.email?.split('@')[0]}
                        </Text>
                       
                      </div>
                      <svg 
                        className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${showUserMenu ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* User Dropdown Menu */}
                    {showUserMenu && (
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="px-4 py-3 border-b border-gray-100">
                        
                          <Text variant="small" className="text-gray-500 text-xs mt-0.5">
                            {user?.email}
                          </Text>
                        </div>
                        <button
                          onClick={handleLogout}
                          className="w-full px-4 py-2.5 text-left text-sm font-medium text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2 mt-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleLogout}
                    className="lg:hidden hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-all duration-200 group/logout"
                  >
                    <svg className="w-4 h-4 mr-1.5 group-hover/logout:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 group/login"
                  >
                    <svg className="w-4 h-4 mr-1.5 group-hover/login:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Login
                  </Button>
                </Link>
                <Link to={ROUTES.REGISTER}>
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group/signup bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/signup:translate-x-full transition-transform duration-700"></span>
                    <span className="relative flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      Sign Up
                    </span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
