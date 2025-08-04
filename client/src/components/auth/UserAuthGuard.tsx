'use client';

import { ReactNode } from 'react';
import Unauthorized from '@/components/auth/Unauthorized';
import { useAuth } from '@/hooks/useAuth';

interface UserAuthGuardProps {
  children: ReactNode;
  requiredRole?: string;
  fallback?: ReactNode;
}

// Loading spinner component
function AuthLoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p className="text-sm text-muted-foreground">Verifying authentication...</p>
      </div>
    </div>
  );
}

export default function UserAuthGuard({ 
  children, 
  requiredRole,
  fallback 
}: UserAuthGuardProps) {
  const { role, isLoggedIn, isLoading, isError, user } = useAuth();

  // Show loading state while checking authentication
  if (isLoading) {
    return <AuthLoadingSpinner />;
  }

  // Check for authentication errors
  if (isError) {
    console.warn('[UserAuthGuard] Authentication error detected');
    return fallback || <Unauthorized />;
  }

  // Check if user is logged in and has valid data
  if (!isLoggedIn || !user || !role) {
    console.warn('[UserAuthGuard] Authentication failed:', {
      isLoggedIn,
      hasUser: !!user,
      hasRole: !!role
    });
    return fallback || <Unauthorized />;
  }

  // Check for specific role requirement
  if (requiredRole && role !== requiredRole) {
    console.warn(`[UserAuthGuard] Role mismatch. Required: ${requiredRole}, Current: ${role}`);
    return fallback || <Unauthorized />;
  }

  // All checks passed, render children
  return <>{children}</>;
}