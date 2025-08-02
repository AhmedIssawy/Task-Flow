'use client';

import UserAuthGuard from '@/components/auth/UserAuthGuard';
import { SideMenu } from '@/components/layout';
import { Navbar } from '@/components/layout/Navbar';
import { CommandPalette } from '@/components/hotkeys/CommandPalette';
import { HotkeyHelper } from '@/components/hotkeys/HotkeyHelper';
import { navItemsData } from '@/constants/sideMenuData';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { PageErrorBoundary } from '@/components/error';

interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  const [, role, id] = usePathname().split('/');
  const { isRTL } = useLanguage();
  if (process.env.NODE_ENV === 'development') {
    console.log('UserLayout role:', role, 'id:', id);
  }

  const getNavItems = navItemsData[role as keyof typeof navItemsData];
  const navItems = useMemo(() => {
    return getNavItems ? getNavItems(id) : [];
  }, [getNavItems, id]);

  return (
    <PageErrorBoundary>
      <UserAuthGuard>
        <div className="min-h-screen bg-background">
          {/* Fixed Navbar */}
          <Navbar />

          <div className="flex pt-16">
            {/* Sidebar */}
            <SideMenu navItems={navItems} />

            {/* Content Area */}
            <div className={cn(
              "flex-1",
              isRTL ? "lg:mr-72" : "lg:ml-72"
            )}>
              {children}
            </div>
          </div>
        </div>
        <CommandPalette />
        <HotkeyHelper />
      </UserAuthGuard>
    </PageErrorBoundary>
  );
}
