// ! need a big adjustments 
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface AdminDashboardCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
}

export function AdminDashboardCard({
  title,
  subtitle,
  icon: Icon,
  variant = 'default',
}: AdminDashboardCardProps) {
  const variantClasses = {
    default: 'border-slate-200 dark:border-gray-700',
    primary: 'border-blue-500',
    success: 'border-green-500',
    warning: 'border-yellow-500',
    danger: 'border-red-500',
  };

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 ${variantClasses[variant]}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
          <Icon className="w-5 h-5 text-blue-600" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600 dark:text-gray-400">{subtitle}</p>
      </CardContent>
    </Card>
  );
}
