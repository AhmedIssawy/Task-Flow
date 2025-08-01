'use client';

import { ReactNode } from 'react';
import Unauthorized from '@/components/auth/Unauthorized';
import { useAuth } from '@/hooks/useAuth';

interface UserAuthGuardProps {
  children: ReactNode;
}

export default function UserAuthGuard({ children }: UserAuthGuardProps) {
  const { role } = useAuth();

  if (!role) {
    return <Unauthorized />;
  }

  return <>{children}</>;
}