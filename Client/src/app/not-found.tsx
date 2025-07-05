'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Ghost } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center space-y-6">
      <Ghost className="w-16 h-16 text-muted-foreground" />
      <h1 className="text-4xl font-bold text-destructive">404 - Page Not Found</h1>
      <p className="text-muted-foreground max-w-md">
        Oops! The page you're looking for doesn’t exist or has been moved.
      </p>
      <Button asChild variant="outline" className="mt-4">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
}
