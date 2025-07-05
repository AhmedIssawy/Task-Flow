'use client';

import { SideMenu } from '@/components/layout';
import { Navbar } from '@/components/layout/Navbar';
import { navItemsData } from '@/constants/sideMenuData';
import { usePathname } from 'next/navigation';

interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  const [, locale, role, id] = usePathname().split('/')
  console.log('UserLayout role:', role, 'id:', id);
  
  const getNavItems = navItemsData[role as keyof typeof navItemsData];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Fixed Navbar */}
      <Navbar />

      <SideMenu navItems={getNavItems(id)} />
      {/* Content Area */}
      <div className="pt-16">{children}</div>
    </div>
  );
}
