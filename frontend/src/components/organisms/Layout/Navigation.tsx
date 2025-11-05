import { useLocation } from 'react-router-dom';
import { NavLink } from '../../atoms';
import { ROUTES } from '../../../utils';
import { NavigationProps } from '../../../interfaces/organisms';

function Navigation({ isAuthenticated }: NavigationProps) {
  const location = useLocation();
  const isActiveRoute = (route: string) => location.pathname === route;

  const navItems = [
    {
      to: ROUTES.AUCTIONS,
      label: 'Browse',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      showWhen: true,
    },
    {
      to: ROUTES.MY_AUCTIONS,
      label: 'My Auctions',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      showWhen: isAuthenticated,
    },
    {
      to: ROUTES.MY_BIDS,
      label: 'My Bids',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      showWhen: isAuthenticated,
    },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-1 bg-gray-50/50 rounded-xl p-1.5 backdrop-blur-sm">
      {navItems
        .filter(item => item.showWhen)
        .map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            isActive={isActiveRoute(item.to)}
          />
        ))}
    </nav>
  );
}

export default Navigation;
