import React, { ReactNode } from 'react';
import FallbackLoading from './fallback';

interface LoadingErrorWrapperProps {
  loading?: boolean;
  error?: Error | null;
  children: ReactNode;
}

export const LoadingErrorWrapper: React.FC<LoadingErrorWrapperProps> = ({ loading = false, error = null, children }) => {
  if (loading) {
    return <FallbackLoading/>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div className='h-full w-full'>{children}</div>;
};
;
