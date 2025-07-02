// ! needs a big adjustments
'use client';

import { AdminDashboardCard } from '@/components/dashboard/AdminDashboardCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetAdminByIdQuery } from '@/store/services/adminApi';
import {
    Book,
    CheckCircle,
    UserCog
} from 'lucide-react';
import { useAppSelector } from '@/store/hooks';

export default function AdminDashboardPage() {
    const adminId = useAppSelector((state) => state.auth.mongoId);
    console.log('Admin ID from Redux:', adminId);

    const { data: admin, isLoading: loadingAdmin } = useGetAdminByIdQuery(adminId ?? "");

    const statsCards = [
        {
            title: "Total Students",
            value: "1,250",
            subtitle: "Across all universities",
            icon: UserCog,
            variant: "primary" as const,
            change: "+50 this week"
        },
        {
            title: "Total Teachers",
            value: "150",
            subtitle: "Across all universities",
            icon: UserCog,
            variant: "success" as const,
            change: "+5 this week"
        },
        {
            title: "Total Courses",
            value: "300",
            subtitle: "Offered this semester",
            icon: Book,
            variant: "warning" as const,
            change: "+10 this semester"
        },
        {
            title: "Pending Approvals",
            value: "12",
            subtitle: "Awaiting your review",
            icon: CheckCircle,
            variant: "danger" as const,
            change: "3 new today"
        }
    ];

    return (
        <div className="space-y-8">
            {/* Welcome Header */}
            <div className="bg-gradient-to-r from-slate-600 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold mb-2">
                        Welcome back, {loadingAdmin ? '...' : admin?.name || 'Admin'}! 👋
                    </h1>
                    <p className="text-slate-100 text-lg">
                        Heres a summary of the platforms activity.
                    </p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsCards.map((stat, index) => (
                    <Card key={index} className="relative overflow-hidden border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-600 dark:text-gray-400 mb-1">{stat.title}</p>
                                    <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                                    <p className="text-xs text-slate-500 dark:text-gray-500 mt-1">{stat.change}</p>
                                </div>
                                <div className={`p-3 rounded-xl ${stat.variant === 'primary' ? 'bg-blue-100 dark:bg-blue-900' :
                                    stat.variant === 'success' ? 'bg-emerald-100 dark:bg-emerald-900' :
                                        stat.variant === 'warning' ? 'bg-amber-100 dark:bg-amber-900' :
                                            'bg-red-100 dark:bg-red-900'
                                    }`}>
                                    <stat.icon className={`w-6 h-6 ${stat.variant === 'primary' ? 'text-blue-600 dark:text-blue-400' :
                                        stat.variant === 'success' ? 'text-emerald-600 dark:text-emerald-400' :
                                            stat.variant === 'warning' ? 'text-amber-600 dark:text-amber-400' :
                                                'text-red-600 dark:text-red-400'
                                        }`} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Admin Details */}
            {loadingAdmin ? (
                <Skeleton className="h-24 w-full" />
            ) : admin && (
                <Card className="border-slate-200 dark:border-gray-700">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                            <UserCog className="w-5 h-5 text-blue-600" />
                            Admin Details
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <AdminDashboardCard
                            key={admin._id}
                            title={admin.name}
                            subtitle={`Role: ${admin.role}`}
                            variant="primary"
                            icon={UserCog}
                        />
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
