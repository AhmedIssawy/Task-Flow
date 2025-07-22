'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getPathByRole } from '@/utils/roleRedirect';
import { useAuth } from '@/hooks/useAuth';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { id, role, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && id && role) {
      const path = getPathByRole(role, id);
      router.replace(path);
    }
  }, [id, role, isLoading, router]);

  return <>{children}</>;
}
