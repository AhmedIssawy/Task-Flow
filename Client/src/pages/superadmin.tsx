import React from 'react';
import { useAppSelector } from '../store/hooks';
import { selectCurrentUser } from '../store/slices/authSlice';

// Unified SuperAdmin Page - All roles can access, content varies by permission
const SuperAdminPage: React.FC = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header - Visible to all roles */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Super Admin Portal
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            System-wide administration and management console
          </p>
        </header>

        {/* Super Admin Role - Full system access */}
        {user?.role === 'SUPER_ADMIN' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Super Admin Dashboard
              </h2>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-6">
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Warning:</strong> You have full system access. Use these tools carefully.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h3 className="font-medium text-red-900 dark:text-red-100">Admin Management</h3>
                  <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                    Create, modify, and remove admin accounts
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h3 className="font-medium text-orange-900 dark:text-orange-100">System Settings</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">
                    Configure global system parameters
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h3 className="font-medium text-yellow-900 dark:text-yellow-100">Database Management</h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                    Backup, restore, and maintain data
                  </p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                  <h3 className="font-medium text-indigo-900 dark:text-indigo-100">Security Monitor</h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-1">
                    Monitor security events and access
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h3 className="font-medium text-purple-900 dark:text-purple-100">System Analytics</h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                    Comprehensive system analytics
                  </p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
                  <h3 className="font-medium text-pink-900 dark:text-pink-100">Global Controls</h3>
                  <p className="text-sm text-pink-700 dark:text-pink-300 mt-1">
                    System-wide operational controls
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  System Health
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Server Status</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Operational
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Database Health</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Healthy
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Active Users</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">1,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">System Load</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">34%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Recent Admin Actions
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-900 dark:text-white">Admin John created new teacher account</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-900 dark:text-white">System backup completed successfully</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-900 dark:text-white">Security policy updated</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">3 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Admin Role - Limited super admin view */}
        {user?.role === 'ADMIN' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Admin - Super Admin Information
              </h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>Admin Access:</strong> You can view system information and escalate issues to super administrators.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-medium text-gray-900 dark:text-white">System Status</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    View current system health and performance metrics.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-medium text-gray-900 dark:text-white">Policy Updates</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Stay informed about system policies and administrative procedures.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-medium text-gray-900 dark:text-white">Escalation Contact</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Contact super administrators for critical issues or system-wide concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Teacher Role - Basic super admin contact */}
        {user?.role === 'TEACHER' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Teacher - System Administration
              </h2>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Teacher Access:</strong> Contact system administrators for technical issues.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">System Support</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  For technical issues or system-related questions, contact the administrative team.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Contact System Support
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Student Role - No access message */}
        {user?.role === 'STUDENT' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Student - Access Notice
              </h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-4">
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                  <strong>Student Access:</strong> This section is for system administrators only.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Limited Access</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Super admin functions are restricted to system administrators. 
                  For assistance, please contact your teacher or administrator.
                </p>
                <div className="space-x-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Contact Teacher
                  </button>
                  <button className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Back to Dashboard
                  </button>
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
                Please log in with appropriate permissions to access the super admin portal.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuperAdminPage;
