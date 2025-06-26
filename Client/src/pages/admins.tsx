import React from 'react'
import { useAppSelector } from '@/store/hooks'
import { selectCurrentUser } from '@/store/slices/authSlice'
import { selectCurrentTheme } from '@/store/slices/themeSlice'
import { selectCurrentLanguage } from '@/store/slices/languageSlice'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Mock data for Super Admin Dashboard
const mockData = {
    institutions: [
        { id: 1, name: 'Harvard University', status: 'Active', students: 15420, admins: 12 },
        { id: 2, name: 'MIT', status: 'Active', students: 11520, admins: 8 },
        { id: 3, name: 'Stanford University', status: 'Active', students: 17180, admins: 15 },
    ],
    systemStats: {
        totalUsers: 125840,
        totalInstitutions: 48,
        totalAdmins: 186,
        systemUptime: '99.9%',
        activeConnections: 8234,
    },
    recentActivities: [
        { id: 1, action: 'New institution registered', institution: 'Yale University', time: '2 hours ago' },
        { id: 2, action: 'Admin promoted', user: 'Dr. Sarah Johnson', time: '4 hours ago' },
        { id: 3, action: 'System maintenance completed', detail: 'Database optimization', time: '1 day ago' },
    ]
}

export default function AdminsPage() {
    const currentUser = useAppSelector(selectCurrentUser)
    const currentTheme = useAppSelector(selectCurrentTheme)
    const currentLanguage = useAppSelector(selectCurrentLanguage)

    const userRole = currentUser?.role

    return (
        <div className="min-h-screen bg-theme text-theme p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Page Header */}
                <header className="space-y-2">
                    <h1 className="text-4xl font-logo text-primary">Super Admin Hub</h1>
                    <p className="text-lg font-body text-theme/80">
                        {currentLanguage === 'ar' ? 'مركز المدير العام' : 'System-Wide Administration'}
                    </p>
                </header>

                {/* Super Admin-Specific View */}
                {userRole === 'SUPER_ADMIN' && (
                    <>
                        {/* System Statistics */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                            <Card>
                                <CardContent className="p-4">
                                    <div className="text-2xl font-bold text-primary">{mockData.systemStats.totalUsers.toLocaleString()}</div>
                                    <p className="text-sm text-theme/70">Total Users</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4">
                                    <div className="text-2xl font-bold text-primary">{mockData.systemStats.totalInstitutions}</div>
                                    <p className="text-sm text-theme/70">Institutions</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4">
                                    <div className="text-2xl font-bold text-primary">{mockData.systemStats.totalAdmins}</div>
                                    <p className="text-sm text-theme/70">System Admins</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4">
                                    <div className="text-2xl font-bold text-green-600">{mockData.systemStats.systemUptime}</div>
                                    <p className="text-sm text-theme/70">System Uptime</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4">
                                    <div className="text-2xl font-bold text-blue-600">{mockData.systemStats.activeConnections.toLocaleString()}</div>
                                    <p className="text-sm text-theme/70">Active Connections</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Main Dashboard */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Institution Management */}
                            <Card className="lg:col-span-2">
                                <CardHeader>
                                    <CardTitle className="font-body">Institution Management</CardTitle>
                                    <CardDescription>Manage educational institutions system-wide</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {mockData.institutions.map(institution => (
                                            <div key={institution.id} className="flex items-center justify-between p-4 border rounded-lg">
                                                <div>
                                                    <h3 className="font-semibold">{institution.name}</h3>
                                                    <p className="text-sm text-theme/70">
                                                        {institution.students.toLocaleString()} students • {institution.admins} admins
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded text-xs">
                                                        {institution.status}
                                                    </span>
                                                    <Button variant="outline" size="sm">Manage</Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 pt-4 border-t">
                                        <Button>Add New Institution</Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Recent Activities */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-body">Recent Activities</CardTitle>
                                    <CardDescription>System-wide recent actions</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {mockData.recentActivities.map(activity => (
                                            <div key={activity.id} className="border-l-4 border-blue-500 pl-4">
                                                <p className="font-semibold text-sm">{activity.action}</p>
                                                <p className="text-xs text-theme/70">
                                                    {activity.institution || activity.user || activity.detail}
                                                </p>
                                                <p className="text-xs text-theme/50">{activity.time}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* System Tools */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-body">Admin Management</CardTitle>
                                    <CardDescription>Manage system administrators</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-body text-sm text-theme/70 mb-4">
                                        Create, promote, and manage super admin accounts.
                                    </p>
                                    <Button variant="outline" size="sm">Manage Admins</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-body">System Analytics</CardTitle>
                                    <CardDescription>View system-wide analytics</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-body text-sm text-theme/70 mb-4">
                                        Monitor usage patterns and system performance.
                                    </p>
                                    <Button variant="outline" size="sm">View Analytics</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-body">System Settings</CardTitle>
                                    <CardDescription>Configure global settings</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-body text-sm text-theme/70 mb-4">
                                        Manage system-wide configurations and policies.
                                    </p>
                                    <Button variant="outline" size="sm">System Settings</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-body">Database Tools</CardTitle>
                                    <CardDescription>Database management utilities</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-body text-sm text-theme/70 mb-4">
                                        Backup, restore, and maintain system data.
                                    </p>
                                    <Button variant="outline" size="sm">Database Tools</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </>
                )}

                {/* Admin accessing super admin page - limited oversight view */}
                {userRole === 'ADMIN' && (
                    <Card className="max-w-4xl mx-auto">
                        <CardHeader>
                            <CardTitle className="font-body text-center">Limited Access</CardTitle>
                            <CardDescription className="text-center">
                                Admin users have restricted access to super admin tools
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center space-y-4">
                            <p className="font-body text-sm text-theme/70">
                                You can view system status and contact super administrators for advanced operations.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 border rounded-lg">
                                    <h3 className="font-semibold">System Status</h3>
                                    <p className="text-sm text-green-600">All Systems Operational</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h3 className="font-semibold">Your Institution</h3>
                                    <p className="text-sm text-theme/70">View your institution data</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h3 className="font-semibold">Support Request</h3>
                                    <p className="text-sm text-theme/70">Contact super admin</p>
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                onClick={() => window.location.href = '/admin'}
                            >
                                Return to Admin Hub
                            </Button>
                        </CardContent>
                    </Card>
                )}

                {/* Teacher/Student accessing super admin page - very limited view */}
                {(userRole === 'TEACHER' || userRole === 'STUDENT') && (
                    <Card className="max-w-2xl mx-auto">
                        <CardHeader>
                            <CardTitle className="font-body text-center">Access Restricted</CardTitle>
                            <CardDescription className="text-center">
                                This area is restricted to administrative users
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center space-y-4">                            <p className="font-body text-sm text-theme/70">
                            Contact your institution&apos;s administrator for assistance.
                        </p><Button
                            variant="outline"
                            onClick={() => window.location.href = userRole === "TEACHER" ? '/teacher' : '/student'}
                        >
                                Return to {userRole === "TEACHER" ? "Teaching" : "Student"} Hub
                            </Button>
                        </CardContent>
                    </Card>
                )}

                {/* User Info */}
                <Card>
                    <CardHeader>
                        <CardTitle className="font-body">User Information</CardTitle>
                        <CardDescription>Current user and system status</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 font-body">
                        <p><strong>Name:</strong> {currentUser?.name}</p>
                        <p><strong>Role:</strong> {currentUser?.role}</p>
                        <p><strong>Email:</strong> {currentUser?.email}</p>
                        <p><strong>Theme:</strong> {String(currentTheme)}</p>
                        <p><strong>Language:</strong> {currentLanguage?.toUpperCase()}</p>
                        <p><strong>Page:</strong> Super Admin Hub (Role-Based Content)</p>
                    </CardContent>
                </Card>

                {/* Navigation Example */}
                <Card>
                    <CardHeader>
                        <CardTitle className="font-body">Quick Navigation</CardTitle>
                        <CardDescription>Test role-based redirection system</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Button
                                variant="outline"
                                onClick={() => window.location.href = '/student'}
                            >
                                Student Page
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => window.location.href = '/teacher'}
                            >
                                Teacher Page
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => window.location.href = '/admin'}
                            >
                                Admin Page
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    localStorage.removeItem('token')
                                    localStorage.removeItem('userRole')
                                    localStorage.removeItem('userData')
                                    window.location.href = '/login'
                                }}
                            >
                                Logout
                            </Button>
                        </div>
                        <p className="text-xs text-theme/60 font-body">
                            Note: Global Router will redirect you based on your role permissions.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}