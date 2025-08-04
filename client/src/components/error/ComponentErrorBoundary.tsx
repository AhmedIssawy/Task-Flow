'use client';

import { ReactNode } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

interface ComponentErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  componentName?: string;
}

export function ComponentErrorBoundary({ 
  children, 
  fallback,
  componentName = 'Unknown Component'
}: ComponentErrorBoundaryProps) {
  return (
    <ErrorBoundary
      level="component"
      fallback={fallback}
      onError={(error, errorInfo) => {
        // Log component-level errors
        console.error(`[Component Error - ${componentName}]:`, {
          error: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          timestamp: new Date().toISOString(),
          componentName
        });

        // Component errors are usually less critical
        // but still worth tracking for debugging
      }}
    >
      {children}
    </ErrorBoundary>
  );
}