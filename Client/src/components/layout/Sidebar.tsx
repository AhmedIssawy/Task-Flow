import React from 'react'
import { useAppSelector } from '@/store/hooks'
import { selectUserRole } from '@/store/slices/authSlice'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getNavigationForRole, type NavigationItem } from '@/lib/routes'
import { cn } from '@/lib/utils'
import {
    Home,
    BookOpen,
    FileText,
    BarChart,
    Calendar,
    Users,
    Settings,
    User,
    Building,
    Building2,
    UserCog,
    Server,
    TrendingUp
} from 'lucide-react'

interface SidebarProps {
    navigation?: NavigationItem[]
    userRole?: string
}

const iconMap = {
    Home,
    BookOpen,
    FileText,
    BarChart,
    Calendar,
    User,
    Users,
    Building,
    Settings,
    Building2,
    UserCog,
    Server,
    TrendingUp
}

const Sidebar: React.FC<SidebarProps> = ({ navigation, userRole: propUserRole }) => {
    const { t } = useTranslation()
    const router = useRouter()
    const storeUserRole = useAppSelector(selectUserRole)

    const userRole = propUserRole || storeUserRole
    const navigationItems = navigation || (userRole ? getNavigationForRole(userRole) : [])
    const isActive = (href: string) => {
        if (href === `/${userRole?.toLowerCase()}`) {
            return router.pathname === href
        }
        return router.pathname.startsWith(href)
    }

    return (
        <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-card border-r border-border overflow-y-auto">
            <div className="p-4">
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-foreground mb-2">
                        {userRole ? t(`roles.${userRole.toLowerCase()}`) : t('dashboard.overview')}
                    </h2>
                    <div className="h-px bg-border"></div>
                </div>

                <nav className="space-y-2">
                    {navigationItems.map((item) => {
                        const Icon = iconMap[item.icon as keyof typeof iconMap]
                        const active = isActive(item.href)

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                                    active
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                )}
                            >
                                {Icon && <Icon className="h-5 w-5" />}
                                {t(`navigation.${item.label.toLowerCase()}`)}
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar
