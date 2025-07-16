import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
}

export const StatCard = ({ title, value }: StatCardProps) => (
  <Card className="w-full shadow-lg border-1 border-muted/30">
    <CardContent className="p-4 flex flex-col">
      <span className="text-sm text-muted-foreground">{title}</span>
      <span className="text-2xl font-bold">{value}</span>
    </CardContent>
  </Card>
);