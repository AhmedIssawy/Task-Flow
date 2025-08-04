'use client';

import { ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Unauthorized from './Unauthorized';

interface RoleGuardProps {
  children: ReactNode;
  allowedRoles: string[];
  fallback?: ReactNode;
}

export function RoleGuard({ children, allowedRoles, fallback }: RoleGuardProps) {
  const { role, isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isLoggedIn || !role || !allowedRoles.includes(role)) {
    return fallback || <Unauthorized />;
  }

  return <>{children}</>;
}