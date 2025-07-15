'use client';

import UserAuthGuard from '@/components/auth/UserAuthGuard';
import { SideMenu } from '@/components/layout';
import { Navbar } from '@/components/layout/Navbar';
import { navItemsData } from '@/constants/sideMenuData';
import { usePathname } from 'next/navigation';

interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  const [, locale, role, id] = usePathname().split('/');
  console.log('UserLayout role:', role, 'id:', id);

  // Normalize role to match navItemsData keys
  const normalizeRole = (role: string): keyof typeof navItemsData => {
    switch (role) {
      case 'super-admin':
        return 'superadmin';
      case 'student':
      case 'teacher':
      case 'admin':
        return role;
      default:
        console.warn(`Unknown role: ${role}, defaulting to student`);
        return 'student';
    }
  };

  const normalizedRole = normalizeRole(role);
  const getNavItems = navItemsData[normalizedRole];

  if (!getNavItems) {
    console.error(`No navigation items found for role: ${role} (normalized: ${normalizedRole})`);
    return <div>Error: Invalid role</div>;
  }
  return (
    <UserAuthGuard>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
        {/* Fixed Navbar */}
        <Navbar />

        <div className="flex pt-16">
          {/* Sidebar */}
          <SideMenu navItems={getNavItems(id)} />

          {/* Content Area */}
          <div className="flex-1 lg:ml-72">
            {children}
          </div>
        </div>
      </div>
    </UserAuthGuard>
  );
}
