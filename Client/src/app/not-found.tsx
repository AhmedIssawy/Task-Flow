'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Ghost, Home, ArrowLeft } from 'lucide-react';
import { useAppSelector } from '@/store/hooks';
import { getPathByRole } from '@/utils/roleRedirect';
import { useMemo } from 'react';

export default function NotFound() {
  const { id, role } = useAppSelector((state) => state.auth);
  
  // Determine the appropriate home path based on authentication status
  const homePath = useMemo(() => {
    if (id && role) {
      // User is logged in, redirect to their dashboard
      const normalizedRole = role.toLowerCase();
      return getPathByRole(normalizedRole, id);
    }
    // User is not logged in, redirect to landing page
    return '/';
  }, [id, role]);

  const isLoggedIn = Boolean(id && role);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-accent/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 ltr:left-10 rtl:right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 ltr:right-10 rtl:left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 ltr:right-1/4 rtl:left-1/4 w-6 h-6 bg-primary/30 rounded-full"></div>
      <div className="absolute bottom-1/3 ltr:left-1/3 rtl:right-1/3 w-4 h-4 bg-secondary/30 rounded-full"></div>
      <div className="absolute top-2/3 ltr:right-1/3 rtl:left-1/3 w-5 h-5 bg-accent/30 rounded-full"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center space-y-8">
        {/* Error Icon */}
        <div className="glass-effect p-8 rounded-3xl shadow-2xl">
          <Ghost className="w-24 h-24 text-muted-foreground mx-auto" />
        </div>

        {/* Error Content */}
        <div className="glass-effect bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-3xl p-8 text-foreground relative overflow-hidden shadow-2xl max-w-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="relative z-10 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">
              404 - Page Not Found
            </h1>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Oops! The page you're looking for doesn't exist or has been moved. 
              {isLoggedIn ? " Don&apos;t worry, you can return to your dashboard." : " Don&apos;t worry, you can return to the homepage."}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            asChild 
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg rounded-xl transition-colors px-8 py-3"
          >
            <Link href={homePath} className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              {isLoggedIn ? 'Go to Dashboard' : 'Go to Homepage'}
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            className="border-border/50 hover:bg-primary/10 rounded-xl transition-colors px-8 py-3"
          >
            <Link href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }} className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Link>
          </Button>
        </div>

        {/* Additional Info */}
        <div className="glass-effect p-4 rounded-2xl border border-border/50 max-w-md">
          <p className="text-sm text-muted-foreground">
            {isLoggedIn ? (
              <>Welcome back, <span className="text-primary font-medium">{role?.toLowerCase()}</span>! 👋</>
            ) : (
              <>Need help? Visit our <Link href="/help" className="text-primary hover:underline">help center</Link></>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}