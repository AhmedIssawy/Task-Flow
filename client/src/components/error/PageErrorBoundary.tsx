'use client';

import { ReactNode } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

interface PageErrorBoundaryProps {
  children: ReactNode;
  showHomeButton?: boolean;
}

export function PageErrorBoundary({ children, showHomeButton = true }: PageErrorBoundaryProps) {
  return (
    <ErrorBoundary
      level="page"
      showHomeButton={showHomeButton}
      onError={(error, errorInfo) => {
        // Log page-level errors for monitoring
        console.error('[Page Error]:', {
          error: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          timestamp: new Date().toISOString(),
          url: typeof window !== 'undefined' ? window.location.href : 'unknown'
        });

        // Here you could send to error reporting service
        // Example: Sentry, LogRocket, etc.
        // errorReportingService.captureException(error, { extra: errorInfo });
      }}
    >
      {children}
    </ErrorBoundary>
  );
}