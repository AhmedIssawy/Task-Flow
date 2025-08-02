'use client';

import { ReactNode } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

interface AppErrorBoundaryProps {
  children: ReactNode;
}

export function AppErrorBoundary({ children }: AppErrorBoundaryProps) {
  return (
    <ErrorBoundary
      level="app"
      onError={(error, errorInfo) => {
        // Log critical app-level errors
        console.error('[Critical App Error]:', {
          error: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          timestamp: new Date().toISOString(),
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
          url: typeof window !== 'undefined' ? window.location.href : 'unknown'
        });

        // Critical errors should be reported immediately
        // Example: Send to error monitoring service
        // errorReportingService.captureException(error, {
        //   level: 'fatal',
        //   extra: errorInfo
        // });
      }}
    >
      {children}
    </ErrorBoundary>
  );
}