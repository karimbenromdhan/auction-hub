import { Text } from '../atoms';
import { UserAvatarProps } from '../../interfaces/molecules';

function UserAvatar({ email, isMenuOpen, onToggle }: UserAvatarProps) {
  const firstLetter = email?.charAt(0).toUpperCase() || 'U';
  const username = email?.split('@')[0] || 'User';

  return (
    <button
      onClick={onToggle}
      className="hidden lg:flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-gray-50 transition-all duration-200 group/user"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur opacity-40 group-hover/user:opacity-60 transition-opacity"></div>
        <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg ring-2 ring-white group-hover/user:ring-blue-100 transition-all duration-300 group-hover/user:scale-110">
          <span className="text-white text-sm font-bold">
            {firstLetter}
          </span>
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
      </div>
      <div className="text-left">
        <Text variant="small" weight="bold" className="text-gray-900 group-hover/user:text-blue-600 transition-colors">
          {username}
        </Text>
      </div>
      <svg 
        className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

export default UserAvatar;
