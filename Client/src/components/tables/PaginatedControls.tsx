import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import CustomSelect from '@/components/dashboard/CustomSelect';

interface PaginationControlsProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  className?: string;
  // Enhanced controls
  limit?: number;
  setLimit?: (limit: number) => void;
  limitOptions?: number[];
  showLimitControls?: boolean;
  showMoreLessControls?: boolean;
  limitStep?: number;
}

export default function PaginationControls({
  page,
  totalPages,
  setPage,
  className,
  limit,
  setLimit,
  limitOptions = [5, 15, 10, 20, 30, 50, 100],
  showLimitControls = false,
  showMoreLessControls = false,
  limitStep = 5
}: PaginationControlsProps) {
  return (
    <div className={cn("mt-4 text-center space-y-6 flex justify-between items-center flex-wrap", className)}>
      {/* Limit Selector Section */}
      {showLimitControls && limit !== undefined && setLimit && (
        <span className="">
          Show
          <CustomSelect
            options={limitOptions.map(value => ({ value }))}
            valueChangeAction={(value) => setLimit(Number(value))}
            value={limit.toString()}
          />
          Items
        </span>
      )}

      {/* Show More/Less Buttons Section */}
      {showMoreLessControls && limit !== undefined && setLimit && (
        <span className="inline-flex gap-2">
          <Button
            variant="default"
            size="sm"
            onClick={() => setLimit(limit + limitStep)}
          >
            Show more
          </Button>
          {limit > limitStep && (
            <Button
              variant="default"
              size="sm"
              onClick={() => setLimit(limit - limitStep)}
            >
              Show less
            </Button>
          )}
        </span>
      )}

      {/* Pagination Controls Section */}
      {totalPages > 0 && (
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
            className="h-9 px-3 bg-background/50 hover:bg-background/80 border-border/50 rounded-lg transition-all duration-200 disabled:opacity-50"
          >
            <svg className="w-4 h-4 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Prev</span>
          </Button>

          {/* Page Numbers for larger screens */}
          <div className="hidden md:flex items-center space-x-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (page <= 3) {
                pageNum = i + 1;
              } else if (page >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = page - 2 + i;
              }

              return (
                <Button
                  key={pageNum}
                  variant={page === pageNum ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setPage(pageNum)}
                  className={cn(
                    "h-9 w-9 p-0 rounded-lg transition-all duration-200",
                    page === pageNum
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "hover:bg-muted/50"
                  )}
                >
                  {pageNum}
                </Button>
              );
            })}
          </div>

          <Button
            variant="outline"
            size="sm"
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
            className="h-9 px-3 bg-background/50 hover:bg-background/80 border-border/50 rounded-lg transition-all duration-200 disabled:opacity-50"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="sm:hidden">Next</span>
            <svg className="w-4 h-4 ms-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      )}
    </div>
  );
}
