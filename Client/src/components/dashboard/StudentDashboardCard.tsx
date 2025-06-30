import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  subtitle?: string;
  rightLabel?: string;
  icon?: LucideIcon;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
  onClick?: () => void;
}

const variantStyles = {
  default: {
    card: 'border-slate-200 hover:border-blue-300 dark:border-gray-700 dark:hover:border-blue-600',
    icon: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    gradient: 'from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20',
    accent: 'from-blue-500 to-indigo-600'
  },
  primary: {
    card: 'border-blue-200 hover:border-blue-400 dark:border-blue-700 dark:hover:border-blue-500',
    icon: 'bg-gradient-to-br from-blue-500 to-blue-600',
    gradient: 'from-blue-50/70 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20',
    accent: 'from-blue-500 to-blue-600'
  },
  success: {
    card: 'border-emerald-200 hover:border-emerald-400 dark:border-emerald-700 dark:hover:border-emerald-500',
    icon: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    gradient: 'from-emerald-50/70 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20',
    accent: 'from-emerald-500 to-emerald-600'
  },
  warning: {
    card: 'border-amber-200 hover:border-amber-400 dark:border-amber-700 dark:hover:border-amber-500',
    icon: 'bg-gradient-to-br from-amber-500 to-orange-500',
    gradient: 'from-amber-50/70 to-orange-100/50 dark:from-amber-950/30 dark:to-orange-900/20',
    accent: 'from-amber-500 to-orange-500'
  },
  danger: {
    card: 'border-red-200 hover:border-red-400 dark:border-red-700 dark:hover:border-red-500',
    icon: 'bg-gradient-to-br from-red-500 to-red-600',
    gradient: 'from-red-50/70 to-red-100/50 dark:from-red-950/30 dark:to-red-900/20',
    accent: 'from-red-500 to-red-600'
  }
}

export function StudentDashboardCard({
  title,
  subtitle,
  rightLabel,
  icon: Icon,
  variant = 'default',
  className,
  onClick
}: Props) {
  const styles = variantStyles[variant]
  
  return (
    <Card 
      className={cn(
        'group relative overflow-hidden border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer bg-white dark:bg-gray-900',
        styles.card,
        onClick && 'hover:shadow-xl',
        className
      )}
      onClick={onClick}
    >
      {/* Background Gradient */}
      <div className={cn('absolute inset-0 bg-gradient-to-br opacity-50', styles.gradient)}></div>
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl"></div>
      
      <CardContent className="relative p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4 flex-1">
            {Icon && (
              <div className={cn(
                'p-3 rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110',
                styles.icon
              )}>
                <Icon className="w-6 h-6" />
              </div>
            )}
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <h3 className="text-lg font-bold text-text-primary dark:text-white truncate group-hover:text-primary transition-colors">
                {title}
              </h3>
              {subtitle && (
                <p className="text-sm text-text-muted dark:text-gray-400 line-clamp-2">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          
          {rightLabel && (
            <Badge 
              variant="outline" 
              className="ml-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors font-medium shrink-0"
            >
              {rightLabel}
            </Badge>
          )}
        </div>
        
        {/* Bottom accent line */}
        <div className={cn(
          'absolute bottom-0 left-0 h-1 bg-gradient-to-r transition-all duration-300 group-hover:h-2',
          styles.accent
        )}></div>
      </CardContent>
    </Card>
  );
}
