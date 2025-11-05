# Auction Platform Frontend

React TypeScript application with real-time bidding capabilities.

## Architecture

This frontend follows **Atomic Design** principles for component organization:

```
src/
├── atoms/           # Basic building blocks (Button, Input, etc.)
├── molecules/       # Simple component combinations (FormField, AuctionCard)
├── organisms/       # Complex components (Header, AuctionList, Forms)
├── templates/       # Page layouts (MainLayout, AuthLayout)
├── pages/           # Route components (HomePage, AuctionDetailPage)
├── hooks/           # Custom React hooks
├── services/        # API and WebSocket services
├── store/           # Zustand state management
├── utils/           # Utility functions
└── types/           # TypeScript type definitions
```

## Tech Stack

- **React 18** with TypeScript
- **TailwindCSS** for styling
- **TanStack Query** (React Query) for server state
- **Zustand** for client state with persist middleware
- **React Router** for navigation
- **React Hook Form + Yup** for forms and validation
- **Socket.IO Client** for real-time updates
- **Axios** for HTTP requests

## Setup

### Prerequisites
- Node.js 18+
- Backend API running on port 3001

### Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env if needed (API URL, Socket URL)
```

### Running the Application

```bash
# Development mode
npm start

# Build for production
npm run build

# Run tests
npm test
```

The app will be available at `http://localhost:3000`

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests in watch mode
- `npm run eject` - Eject from Create React App (not recommended)

## State Management Strategy

### Server State (TanStack Query)
- Auctions data
- Bids data
- User profile
- Automatic caching and refetching
- Optimistic updates

### Client State (Zustand)
- Authentication (user, token) with localStorage persistence
- UI state (modals, toasts, loading)
- Filters and preferences

### Real-Time Updates (Socket.IO)
- Live bid updates
- Auction status changes
- Automatic cache synchronization with TanStack Query

## Component Development Guidelines

### Atoms
- Single responsibility
- Highly reusable
- Accept props with default values
- Include TypeScript interfaces
- Style with TailwindCSS utility classes

Example:
```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button = ({ 
  children, 
  variant = 'primary',
  onClick 
}: ButtonProps) => {
  // Implementation
};
```

### Molecules
- Combine 2-3 atoms
- Handle simple interactions
- Reusable across pages

### Organisms
- Complex, feature-specific components
- May contain business logic
- Connect to hooks and services

### Pages
- Route-level components
- Compose organisms and templates
- Handle data fetching

## Environment Variables

```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_SOCKET_URL=http://localhost:3001
```

## Folder Structure Details

- **atoms/** - Button, Input, Label, Image, Spinner, Badge, Icon, Text, Card
- **molecules/** - FormField, AuctionCard, BidItem, CountdownTimer, FileUpload
- **organisms/** - Header, Footer, AuctionList, AuctionDetail, Forms
- **pages/** - HomePage, AuctionDetailPage, LoginPage, CreateAuctionPage
- **hooks/** - useAuth, useAuctions, useBids, useSocket, useCountdown
- **services/** - authService, auctionService, bidService, socketService
- **store/** - authStore, uiStore
- **types/** - User, Auction, Bid, API response types

## Performance Optimizations

- React.memo for expensive components
- useMemo for expensive calculations
- useCallback for event handlers
- Lazy loading routes with React.lazy
- Image optimization
- TanStack Query caching

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus management
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Follow the Atomic Design principles and ensure all components are:
- Typed with TypeScript
- Styled with TailwindCSS
- Tested (when applicable)
- Documented with prop interfaces
