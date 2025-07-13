import { Button } from '@/components/ui/button';

interface PaginationControlsProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  className?: string;
}

export default function PaginationControls({
  page,
  totalPages,
  setPage,
  className
}: PaginationControlsProps) {
  return (
    <div className={className + " flex justify-end items-center gap-2"}>
      <Button
        variant="outline"
        size="sm"
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </Button>
      <span className="text-sm text-muted-foreground">
        Page {page} of {totalPages}
      </span>
      <Button
        variant="outline"
        size="sm"
        disabled={page >= totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </Button>
    </div>
  );
}
