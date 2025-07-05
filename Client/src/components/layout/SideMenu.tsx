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
      <ScrollArea className="flex-1 px-4 py-8">
        <nav className="space-y-3">
          {navItems.map(({ label, href, icon: Icon, badge }) => {
            const isActive = pathname.endsWith(href);
            return (
              <Link
                key={label}
                href={href}
                onClick={onItemClick}
                className={cn(
                  'group flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]',
                  isActive
                    ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/25 border border-primary/20'
                    : 'text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:shadow-md hover:border hover:border-primary/20 border border-transparent'
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    'p-2 rounded-xl transition-all duration-300',
                    isActive 
                      ? 'bg-primary-foreground/20 shadow-sm' 
                      : 'group-hover:bg-primary/20 group-hover:shadow-sm'
                  )}>
                    <Icon className={cn(
                      'h-5 w-5 transition-all duration-300',
                      isActive ? 'text-primary-foreground' : 'text-current group-hover:text-primary group-hover:scale-110'
                    )} />
                  </div>
                  <span className="font-medium tracking-wide leading-relaxed">{label}</span>
                </div>
                {badge && (
                  <Badge
                    variant={isActive ? 'secondary' : 'outline'}
                    className={cn(
                      'text-xs px-3 py-1 font-semibold transition-all duration-300 rounded-xl shadow-sm',
                      isActive
                        ? 'bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 shadow-primary-foreground/10'
                        : 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:shadow-primary/10 group-hover:scale-105'
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
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-72 z-40 hidden lg:flex glass-effect bg-background/80 backdrop-blur-md border-r border-border/50 shadow-2xl rounded-r-2xl">
      <SideNavContent navItems={navItems} onItemClick={onItemClick} />
    </aside>
  )
}