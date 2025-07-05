'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { NavItem } from '@/constants/sideMenuData'

interface SideNavContentProps {
  navItems: NavItem[]
  onItemClick?: () => void
}

export function SideNavContent({ navItems, onItemClick }: SideNavContentProps) {
  const pathname = usePathname()
  return (
    <div className="flex h-full w-full flex-col glass-effect bg-background/80 backdrop-blur-md border-r border-border/50">
      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-6">
        <nav className="space-y-2">
          {navItems.map(({ label, href, icon: Icon, badge }) => {
            const isActive = pathname.endsWith(href);
            return (
              <Link
                key={label}
                href={href}
                onClick={onItemClick}
                className={cn(
                  'group flex items-center justify-between px-3 py-2.5 rounded-2xl text-sm font-medium transition-colors duration-200',
                  isActive
                    ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className={cn(
                    'h-5 w-5 transition-colors duration-200',
                    isActive ? 'text-primary-foreground' : 'text-current group-hover:text-primary'
                  )} />
                  <span>{label}</span>
                </div>
                {badge && (
                  <Badge
                    variant={isActive ? 'secondary' : 'outline'}
                    className={cn(
                      'text-xs px-2 py-0.5 font-medium transition-colors duration-200 rounded-xl',
                      isActive
                        ? 'bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30'
                        : 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20'
                    )}
                  >
                    {badge}
                  </Badge>
                )}
              </Link>
            )
          })}
        </nav>
      </ScrollArea>
      
      
    </div>
  )
}

interface SideMenuProps {
  navItems: NavItem[]
  onItemClick?: () => void
}

export function SideMenu({ navItems, onItemClick }: SideMenuProps) {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 z-40 hidden lg:flex glass-effect bg-background/80 backdrop-blur-md border-r border-border/50 shadow-2xl rounded-r-2xl">
      <SideNavContent navItems={navItems} onItemClick={onItemClick} />
    </aside>
  )
}