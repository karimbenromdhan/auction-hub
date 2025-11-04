import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { queryClient } from '../config/queryClient';
import ErrorBoundary from '../components/common/ErrorBoundary';
import { WithChildren } from '../interfaces/common';

function AppProviders({ children }: WithChildren) {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default AppProviders;
