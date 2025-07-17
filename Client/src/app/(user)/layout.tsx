'use client';

import UserAuthGuard from '@/components/auth/UserAuthGuard';
import { SideMenu } from '@/components/layout';
import { Navbar } from '@/components/layout/Navbar';
import { navItemsData } from '@/constants/sideMenuData';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  const [, role, id] = usePathname().split('/');
  console.log('UserLayout role:', role, 'id:', id);

  const getNavItems = navItemsData[role.replace(/-/g, '') as keyof typeof navItemsData];
  const navItems = useMemo(() => {
    return getNavItems ? getNavItems(id) : [];
  }, [getNavItems, id]);

  return (
    <UserAuthGuard>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      {/* Fixed Navbar */}
      <Navbar />

      <div className="flex pt-16">
        {/* Sidebar */}
        <SideMenu navItems={navItems} />
        
        {/* Content Area */}
        <div className="flex-1 lg:ml-72">
          {children}
        </div>
      </div>
    </div>
    </UserAuthGuard>
  );
}
