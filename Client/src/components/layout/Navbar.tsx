import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { selectIsAuthenticated, selectUser, clearAuth } from '@/store/slices/authSlice';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const router = useRouter();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    dispatch(clearAuth());
    router.push('/login');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  const navigationItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Courses', href: '/courses' },
    { name: 'Students', href: '/students' },
    { name: 'Instructors', href: '/instructors' },
    { name: 'Reports', href: '/reports' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-theme text-theme border-b border-neutral/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">TF</span>
              </div>
              <span className="text-xl font-semibold text-theme font-signature">Task Flow</span>
            </Link>
          </div>

          {isAuthenticated ? (
            <div className="flex items-center space-x-8">
              {/* Navigation Links */}
              <nav className="hidden md:flex space-x-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      router.pathname === item.href
                        ? 'text-primary border-b-2 border-primary pb-1'
                        : 'text-muted'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <button className="relative p-2 text-muted hover:text-primary transition-colors">
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-5 5v-5zM10.02 2.29c3.93.48 7 3.85 7 7.98v2.09c0 1.58.8 2.98 2 3.77 0 0-8.88 0-11 0 2.8-5.58 2-7.86 2-7.86z"
                    />
                  </svg>
                  {/* Notification dot */}
                  <div className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></div>
                </button>

                {/* User Menu */}
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 p-1 rounded-full hover:bg-muted transition-colors"
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback className="bg-primary text-white text-sm">
                        {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </button>

                  {/* User Dropdown Menu */}
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-theme rounded-md shadow-lg border border-neutral/20 py-1 z-50">
                      <div className="px-4 py-2 border-b border-neutral/20">
                        <p className="text-sm font-medium text-theme">{user?.name}</p>
                        <p className="text-xs text-muted">{user?.email}</p>
                      </div>
                      <Button
                        onClick={() => {
                          setShowUserMenu(false);
                          // Navigate to profile
                          router.push(`${router.asPath}/profile/settings`)
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-theme bg-[#E5EDF5] dark:bg-[#21364A] hover:bg-primary/5 hover:text-primary  transition-colors"
                      >
                        Profile Settings
                      </Button>
                      <Button
                        onClick={() => {
                          setShowUserMenu(false);
                          handleLogout();
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-theme bg-[#E5EDF5] dark:bg-[#21364A] hover:bg-primary/5 hover:text-primary  transition-colors"
                      >
                        Sign Out
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => router.push('/about')}>
                About
              </Button>
              <Button variant="outline" onClick={() => router.push('/signup')}>
                Sign Up
              </Button>
              <Button variant="default" onClick={handleLogin}>
                Log In
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
