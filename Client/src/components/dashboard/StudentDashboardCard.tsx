import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  subtitle?: string;
  rightLabel?: string;
  icon?: LucideIcon;
}

export function StudentDashboardCard({
  title,
  subtitle,
  rightLabel,
  icon: Icon,
}: Props) {
  return (
    <Card className="mb-2 w-full">
      <CardContent className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {Icon && (
            <div className="bg-[#50575e] p-2 rounded-md">
              <Icon className="w-5 h-5 text-muted-foreground" />
            </div>
          )}
          <div>
            <p className="font-medium">{title}</p>
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
        </div>
        {rightLabel && (
          <span className="text-xs text-muted-foreground">{rightLabel}</span>
        )}
      </CardContent>
    </Card>
  );
}
