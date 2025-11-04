import { Link } from 'react-router-dom';
import { NavLinkProps } from '../../interfaces/molecules';

function NavLink({ to, icon, label, isActive }: NavLinkProps) {
  return (
    <Link 
      to={to} 
      className={`relative px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
        isActive
          ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md'
          : 'text-gray-700 hover:text-blue-600 hover:bg-white hover:shadow-sm'
      }`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {label}
      </span>
    </Link>
  );
}

export default NavLink;
