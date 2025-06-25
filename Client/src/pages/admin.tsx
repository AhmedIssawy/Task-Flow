import React from 'react';
import { useAppSelector } from '@/store/hooks'
import { selectCurrentUser } from '@/store/slices/authSlice'
import { Button } from '@/components/ui/button'

// Mock data for Admin Dashboard
const mockData = {
    users: [
        { id: 1, name: 'Dr. Smith', role: 'TEACHER', department: 'Mathematics', status: 'Active' },
        { id: 2, name: 'Alice Johnson', role: 'STUDENT', department: 'Computer Science', status: 'Active' },
        { id: 3, name: 'Prof. Brown', role: 'TEACHER', department: 'Physics', status: 'Active' },
    ],
    courses: [
        { id: 1, name: 'Advanced Mathematics', instructor: 'Dr. Smith', students: 28, status: 'Active' },
        { id: 2, name: 'Computer Science 101', instructor: 'Prof. Johnson', students: 35, status: 'Active' },
        { id: 3, name: 'Physics Laboratory', instructor: 'Dr. Brown', students: 22, status: 'Active' },
    ],
    systemStats: {
        totalUsers: 1245,
        totalTeachers: 48,
        totalStudents: 1180,
        totalCourses: 156,
    }
}

// Unified Admin Page - All roles can access, content varies by permission
const AdminPage: React.FC = () => {
    const user = useAppSelector(selectCurrentUser);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header - Visible to all roles */}
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Admin Portal
                    </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Administrative tools and management interface
                    </p>
                </header>

                {/* Admin Role - Full admin functionality */}
                {user?.role === 'ADMIN' && (
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Admin Dashboard
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                <h3 className="font-medium text-blue-900 dark:text-blue-100">User Management</h3>
                                <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                                    Manage {mockData.systemStats.totalUsers} users ({mockData.systemStats.totalTeachers} teachers, {mockData.systemStats.totalStudents} students)
                                </p>
                                <div className="mt-2">
                                    <Button variant="outline" size="sm">Manage Users</Button>
                                </div>
                            </div>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                    <h3 className="font-medium text-green-900 dark:text-green-100">Course Management</h3>
                                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                                        Oversee {mockData.systemStats.totalCourses} courses and assignments
                                    </p>
                                    <div className="mt-2">
                                        <Button variant="outline" size="sm">Manage Courses</Button>
                                    </div>
                                </div>
                                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                    <h3 className="font-medium text-purple-900 dark:text-purple-100">System Settings</h3>
                                    <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                                        Configure system preferences and policies
                                    </p>
                                    <div className="mt-2">
                                        <Button variant="outline" size="sm">System Settings</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Recent Activity
                            </h2>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between py-2">
                                    <span className="text-gray-600 dark:text-gray-300">New student registrations</span>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">+12 today</span>
                                </div>
                                <div className="flex items-center justify-between py-2">
                                    <span className="text-gray-600 dark:text-gray-300">Assignments submitted</span>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">47 today</span>
                                </div>
                                <div className="flex items-center justify-between py-2">
                                    <span className="text-gray-600 dark:text-gray-300">System uptime</span>
                                    <span className="text-sm font-medium text-green-600">99.9%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Super Admin Role - Super admin view of admin portal */}
                {user?.role === 'SUPER_ADMIN' && (
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Super Admin - Admin Overview
                            </h2>
                            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
                                <p className="text-red-800 dark:text-red-200 text-sm">
                                    <strong>Super Admin Access:</strong> You have full system access and can manage all admin functions.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                                    <h3 className="font-medium text-indigo-900 dark:text-indigo-100">Admin Management</h3>
                                    <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-1">
                                        Create and manage admin accounts
                                    </p>
                                </div>
                                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                                    <h3 className="font-medium text-yellow-900 dark:text-yellow-100">System Monitoring</h3>
                                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                                        Monitor all admin activities
                                    </p>
                                </div>
                                <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
                                    <h3 className="font-medium text-pink-900 dark:text-pink-100">Global Settings</h3>
                                    <p className="text-sm text-pink-700 dark:text-pink-300 mt-1">
                                        Configure system-wide settings
                                    </p>
                                </div>
                                <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                                    <h3 className="font-medium text-teal-900 dark:text-teal-100">Analytics</h3>
                                    <p className="text-sm text-teal-700 dark:text-teal-300 mt-1">
                                        View comprehensive analytics
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Teacher Role - Limited admin view */}
                {user?.role === 'TEACHER' && (
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Teacher - Admin Information
                            </h2>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                                <p className="text-blue-800 dark:text-blue-200 text-sm">
                                    <strong>Teacher Access:</strong> You can view general admin information and contact administrators.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <h3 className="font-medium text-gray-900 dark:text-white">System Announcements</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                        Stay updated with important system announcements from administrators.
                                    </p>
                                </div>
                                <div className="border-l-4 border-green-500 pl-4">
                                    <h3 className="font-medium text-gray-900 dark:text-white">Support Contact</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                        Contact administrators for technical support or course management assistance.
                                    </p>
                                </div>
                                <div className="border-l-4 border-purple-500 pl-4">
                                    <h3 className="font-medium text-gray-900 dark:text-white">Resource Access</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                        Access teaching resources and administrative guidelines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Student Role - Basic admin contact info */}
                {user?.role === 'STUDENT' && (
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Student - Administration Contact
                            </h2>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
                                <p className="text-green-800 dark:text-green-200 text-sm">
                                    <strong>Student Access:</strong> Contact administration for support and information.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="text-center">
                                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Need Help?</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        Contact the administration team for any questions or support.
                                    </p>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                                        Contact Administration
                                    </button>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Common Resources</h4>
                                    <ul className="space-y-2">
                                        <li>
                                            <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                                Student Handbook
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                                Academic Calendar
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                                Technical Support
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* No user or unknown role */}
                {!user?.role && (
                    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Access Restricted
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Please log in to access the admin portal.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPage;