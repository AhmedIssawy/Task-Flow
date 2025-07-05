'use client';

import { useAppSelector } from '@/store/hooks';
import { ReactNode } from 'react';
import Unauthorized from './Unathorized';

interface UserAuthGuardProps {
  children: ReactNode;
}

export default function UserAuthGuard({ children }: UserAuthGuardProps) {
  const { role } = useAppSelector((state) => state.auth);

  if (!role) {
    return <Unauthorized />;
  }

  return <>{children}</>;
}