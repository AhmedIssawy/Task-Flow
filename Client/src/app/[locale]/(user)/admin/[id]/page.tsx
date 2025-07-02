"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Users,
    BookOpen,
    GraduationCap,
    Building,
    TrendingUp,
    AlertCircle,
    CheckCircle,
    Clock,
    Plus,
    Eye,
    Settings,
} from "lucide-react";
import { useAppSelector } from "@/store/hooks";
import { useGetAdminByIdQuery } from "@/store/services/adminApi";

export default function AdminDashboardPage() {
    const { id } = useParams();
    const adminId = useAppSelector((state) => state.auth.mongoId);

    // Input validation and security checks
    const isValidAdminId = adminId && typeof adminId === 'string' && adminId.length > 0;

    const { data: admin, isLoading: loadingAdmin, error: adminError } = useGetAdminByIdQuery(
        adminId ?? "", {
        skip: !isValidAdminId
    }
    );

    // Security check: Ensure route ID matches admin ID or admin has access
    const hasValidAccess = admin && (admin.id === id || admin._id === adminId);

    // Memoized admin display data for performance
    const adminDisplayData = useMemo(() => {
        if (!admin) return null;

        return {
            displayName: admin.name || 'Administrator',
            role: admin.role?.toUpperCase() || 'ADMIN',
            shortId: admin.id || 'N/A',
            databaseId: admin._id || 'N/A',
            isActive: true,
            lastLogin: 'Today', // This could be enhanced with real data
            permissions: ['All Administrative Functions'] // This could be enhanced with real data
        };
    }, [admin]);

    // Handle invalid admin ID
    if (!isValidAdminId) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Card className="w-full max-w-md">
                    <CardContent className="p-6 text-center">
                        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                        <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
                        <p className="text-muted-foreground mb-4">
                            Invalid admin session. Please log in again.
                        </p>
                        <Button onClick={() => window.location.href = '/auth/login'}>
                            Go to Login
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Handle loading state
    if (loadingAdmin) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading admin dashboard...</p>
                </div>
            </div>
        );
    }

    // Handle error state
    if (adminError) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Card className="w-full max-w-md">
                    <CardContent className="p-6 text-center">
                        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                        <h2 className="text-xl font-semibold mb-2">Error Loading Admin Data</h2>
                        <p className="text-muted-foreground mb-4">
                            Unable to load admin information. Please try refreshing the page.
                        </p>
                        <Button onClick={() => window.location.reload()}>
                            Retry
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Handle case where admin data is not found
    if (!admin && !loadingAdmin) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Card className="w-full max-w-md">
                    <CardContent className="p-6 text-center">
                        <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                        <h2 className="text-xl font-semibold mb-2">Admin Not Found</h2>
                        <p className="text-muted-foreground mb-4">
                            The admin profile could not be found. Please contact support.
                        </p>
                        <Button variant="outline" onClick={() => window.history.back()}>
                            Go Back
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Security check: Ensure admin has valid access
    if (admin && !hasValidAccess) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Card className="w-full max-w-md">
                    <CardContent className="p-6 text-center">
                        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                        <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
                        <p className="text-muted-foreground mb-4">
                            You dont have permission to access this admin dashboard.
                        </p>
                        <Button variant="outline" onClick={() => window.history.back()}>
                            Go Back
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Admin-specific stats cards
    const adminStatsCards = [
        {
            title: "Total Students",
            value: "1,247",
            subtitle: "Active enrollments",
            icon: GraduationCap,
            variant: "primary" as const,
            change: "+12 this week",
            trend: "up",
        },
        {
            title: "Active Teachers",
            value: "89",
            subtitle: "Faculty members",
            icon: Users,
            variant: "success" as const,
            change: "+3 new hires",
            trend: "up",
        },
        {
            title: "Course Programs",
            value: "156",
            subtitle: "Available courses",
            icon: BookOpen,
            variant: "warning" as const,
            change: "8 pending approval",
            trend: "neutral",
        },
        {
            title: "System Health",
            value: "98.5%",
            subtitle: "Uptime this month",
            icon: TrendingUp,
            variant: "success" as const,
            change: "All systems operational",
            trend: "up",
        },
    ];

    // Recent administrative activities
    const recentActivities = [
        {
            title: "New Teacher Registration",
            description: "Dr. Sarah Johnson joined Computer Science Department",
            time: "2 hours ago",
            type: "teacher",
            status: "completed",
            icon: Users,
        },
        {
            title: "Course Approval Request",
            description: "Advanced Machine Learning course pending review",
            time: "4 hours ago",
            type: "course",
            status: "pending",
            icon: BookOpen,
        },
        {
            title: "Student Enrollment Batch",
            description: "45 new students enrolled for Spring semester",
            time: "6 hours ago",
            type: "student",
            status: "completed",
            icon: GraduationCap,
        },
        {
            title: "System Maintenance",
            description: "Database optimization completed successfully",
            time: "1 day ago",
            type: "system",
            status: "completed",
            icon: Settings,
        },
    ];

    // Quick action items for admin
    const quickActions = [
        {
            title: "Add New Teacher",
            description: "Register a new faculty member",
            icon: Users,
            action: "create",
            href: `/admin/${id}/teachers/new`,
        },
        {
            title: "Create Course",
            description: "Set up a new course program",
            icon: BookOpen,
            action: "create",
            href: `/admin/${id}/courses/new`,
        },
        {
            title: "Enroll Students",
            description: "Bulk student enrollment",
            icon: GraduationCap,
            action: "create",
            href: `/admin/${id}/students/new`,
        },
        {
            title: "System Reports",
            description: "View analytics and reports",
            icon: TrendingUp,
            action: "view",
            href: `/admin/${id}/reports`,
        },
    ];

    // Pending approvals or urgent items
    const urgentItems = [
        {
            title: "Course Approval Requests",
            count: 8,
            urgency: "high",
            href: `/admin/${id}/courses?filter=pending`,
        },
        {
            title: "Teacher Applications",
            count: 3,
            urgency: "medium",
            href: `/admin/${id}/teachers?filter=applications`,
        },
        {
            title: "Student Issues",
            count: 12,
            urgency: "low",
            href: `/admin/${id}/students?filter=issues`,
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "completed":
                return "text-green-600 bg-green-50 border-green-200";
            case "pending":
                return "text-orange-600 bg-orange-50 border-orange-200";
            case "urgent":
                return "text-red-600 bg-red-50 border-red-200";
            default:
                return "text-gray-600 bg-gray-50 border-gray-200";
        }
    };

    const getUrgencyColor = (urgency: string) => {
        switch (urgency) {
            case "high":
                return "text-red-600 bg-red-50";
            case "medium":
                return "text-orange-600 bg-orange-50";
            case "low":
                return "text-blue-600 bg-blue-50";
            default:
                return "text-gray-600 bg-gray-50";
        }
    };

    return (
        <div className="space-y-8">
            {/* Admin Profile & Welcome Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="relative z-10">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                    <Users className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold mb-1">
                                        Welcome back, {adminDisplayData?.displayName || "Administrator"}! 🎯
                                    </h1>
                                    <div className="flex items-center space-x-4 text-indigo-100">
                                        <span className="font-medium">Admin ID: {adminDisplayData?.shortId || id}</span>
                                        <Badge
                                            variant="secondary"
                                            className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                                        >
                                            {adminDisplayData?.role || 'ADMIN'}
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                            <p className="text-indigo-100 text-lg">
                                Manage your educational institution efficiently. You have{" "}
                                {urgentItems.reduce((sum, item) => sum + item.count, 0)} items
                                requiring attention.
                            </p>
                        </div>
                        {admin && (
                            <div className="text-right text-indigo-100">
                                <p className="text-sm">Database ID</p>
                                <p className="font-mono text-xs bg-white/10 px-2 py-1 rounded">
                                    {admin._id}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {adminStatsCards.map((stat, index) => (
                    <Card
                        key={index}
                        className="relative overflow-hidden border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                    >
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-muted-foreground">
                                        {stat.title}
                                    </p>
                                    <p className="text-3xl font-bold">{stat.value}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {stat.subtitle}
                                    </p>
                                </div>
                                <div
                                    className={`p-3 rounded-lg ${stat.variant === "primary"
                                        ? "bg-blue-50 text-blue-600"
                                        : stat.variant === "success"
                                            ? "bg-green-50 text-green-600"
                                            : stat.variant === "warning"
                                                ? "bg-orange-50 text-orange-600"
                                                : "bg-gray-50 text-gray-600"
                                        }`}
                                >
                                    <stat.icon className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center text-sm">
                                <span
                                    className={`font-medium ${stat.trend === "up"
                                        ? "text-green-600"
                                        : stat.trend === "down"
                                            ? "text-red-600"
                                            : "text-gray-600"
                                        }`}
                                >
                                    {stat.change}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Admin Profile Information */}
                <div className="lg:col-span-1">
                    <Card className="border-slate-200 dark:border-gray-700">
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Users className="h-5 w-5 mr-2 text-blue-500" />
                                Admin Profile
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                        <Users className="h-10 w-10 text-white" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold">{adminDisplayData?.displayName}</h3>
                                    <Badge variant="outline" className="mt-2">
                                        {adminDisplayData?.role}
                                    </Badge>
                                </div>
                                <div className="space-y-3 pt-4 border-t">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Admin ID:</span>
                                        <span className="text-sm font-medium">{adminDisplayData?.shortId}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Database ID:</span>
                                        <span className="text-xs font-mono bg-muted px-2 py-1 rounded">
                                            {adminDisplayData?.databaseId}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Status:</span>
                                        <Badge variant="default" className="bg-green-100 text-green-800">
                                            {adminDisplayData?.isActive ? 'Active' : 'Inactive'}
                                        </Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Last Login:</span>
                                        <span className="text-sm">{adminDisplayData?.lastLogin}</span>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <Button variant="outline" className="w-full">
                                        <Settings className="h-4 w-4 mr-2" />
                                        Edit Profile
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Activities */}
                <div className="lg:col-span-2">
                    <Card className="border-slate-200 dark:border-gray-700">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <span>Recent Administrative Activities</span>
                                <Button variant="outline" size="sm">
                                    <Eye className="h-4 w-4 mr-2" />
                                    View All
                                </Button>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentActivities.map((activity, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4 p-4 rounded-lg border border-slate-100 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors"
                                    >
                                        <div
                                            className={`p-2 rounded-lg ${getStatusColor(activity.status)}`}
                                        >
                                            <activity.icon className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-gray-900 dark:text-gray-100">
                                                {activity.title}
                                            </p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                {activity.description}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                                                {activity.time}
                                            </p>
                                        </div>
                                        <Badge
                                            variant={
                                                activity.status === "completed"
                                                    ? "default"
                                                    : "secondary"
                                            }
                                        >
                                            {activity.status}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - Quick Actions & Urgent Items */}
                <div className="lg:col-span-3 mt-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Urgent Items */}
                        <Card className="border-slate-200 dark:border-gray-700">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <AlertCircle className="h-5 w-5 mr-2 text-orange-500" />
                                    Requires Attention
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {urgentItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`p-3 rounded-lg border ${getUrgencyColor(
                                                item.urgency
                                            )} cursor-pointer hover:shadow-sm transition-shadow`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <p className="font-medium">{item.title}</p>
                                                <Badge
                                                    variant="outline"
                                                    className={getUrgencyColor(item.urgency)}
                                                >
                                                    {item.count}
                                                </Badge>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Actions */}
                        <Card className="border-slate-200 dark:border-gray-700">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Plus className="h-5 w-5 mr-2 text-blue-500" />
                                    Quick Actions
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-3">
                                    {quickActions.map((action, index) => (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            className="h-auto p-4 justify-start hover:bg-slate-50 dark:hover:bg-gray-800"
                                        >
                                            <action.icon className="h-5 w-5 mr-3 text-blue-500" />
                                            <div className="text-left">
                                                <p className="font-medium">{action.title}</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    {action.description}
                                                </p>
                                            </div>
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* System Overview */}
            <Card className="border-slate-200 dark:border-gray-700">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>System Overview</span>
                        <Button variant="outline" size="sm">
                            <Settings className="h-4 w-4 mr-2" />
                            Settings
                        </Button>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-4 border border-slate-200 dark:border-gray-700 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">
                                <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                                Operational
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Database Status
                            </p>
                        </div>
                        <div className="text-center p-4 border border-slate-200 dark:border-gray-700 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">
                                <Clock className="h-8 w-8 mx-auto mb-2" />
                                24/7
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                System Monitoring
                            </p>
                        </div>
                        <div className="text-center p-4 border border-slate-200 dark:border-gray-700 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">
                                <Building className="h-8 w-8 mx-auto mb-2" />
                                Multi-Campus
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Infrastructure
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}