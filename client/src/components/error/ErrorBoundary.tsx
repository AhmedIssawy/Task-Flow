'use client';

import React, { Component, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  showHomeButton?: boolean;
  level?: 'page' | 'component' | 'app';
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`[${this.props.level || 'Unknown'} Error Boundary]:`, error);
    console.error('Error Info:', errorInfo);
    
    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);
    
    // Store error info for debugging
    this.setState({ errorInfo });
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  private handleRefresh = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI based on level
      const { level = 'component' } = this.props;

      if (level === 'app') {
        return (
          <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background">
            <div className="max-w-md text-center">
              <AlertTriangle className="h-20 w-20 text-destructive mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">Application Error</h1>
              <p className="text-muted-foreground mb-6">
                The application encountered a critical error. Please refresh the page or contact support if the problem persists.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={this.handleRefresh} className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Refresh Page
                </Button>
                <Button variant="outline" onClick={this.handleGoHome} className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Go Home
                </Button>
              </div>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                    Error Details (Development)
                  </summary>
                  <pre className="mt-2 p-4 bg-muted rounded-lg text-xs overflow-auto">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        );
      }

      if (level === 'page') {
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
            <AlertTriangle className="h-16 w-16 text-destructive mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Page Error</h2>
            <p className="text-muted-foreground mb-4 text-center max-w-md">
              This page encountered an error. You can try refreshing or go back to the previous page.
            </p>
            <div className="flex gap-3">
              <Button onClick={this.handleRetry} variant="outline">
                Try Again
              </Button>
              <Button onClick={this.handleRefresh} className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                Refresh
              </Button>
              {this.props.showHomeButton && (
                <Button variant="outline" onClick={this.handleGoHome} className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Home
                </Button>
              )}
            </div>
          </div>
        );
      }

      // Component level error
      return (
        <div className="p-4 border border-destructive/20 rounded-lg bg-destructive/5">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Component Error</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            This component failed to load properly.
          </p>
          <Button size="sm" variant="outline" onClick={this.handleRetry}>
            Retry
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}