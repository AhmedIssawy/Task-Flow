'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Unauthorized() {
  const [countdown, setCountdown] = useState(4);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          router.replace('/login');
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="flex h-screen flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-semibold text-destructive">Unauthorized</h1>
      <p className="mt-2 text-muted-foreground">
        You don’t have access to this page.
      </p>
      <p className="mt-2 text-sm">
        Redirecting to login in <span className="font-medium">{countdown}</span> seconds...
      </p>
    </div>
  );
}
