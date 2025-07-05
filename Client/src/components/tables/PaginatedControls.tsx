import { Button } from '@/components/ui/button';

interface PaginationControlsProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export default function PaginationControls({
  page,
  totalPages,
  setPage,
}: PaginationControlsProps) {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, page - 2);
      const end = Math.min(totalPages, start + maxVisible - 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  };

  return (
    <div className="glass-effect rounded-2xl p-4 border border-border/50 shadow-lg">
      <div className="flex justify-center items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="hover:bg-primary/10 border-primary/20 hover:border-primary/30 rounded-xl transition-all duration-300 hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          Previous
        </Button>
        
        <div className="flex items-center gap-1">
          {getPageNumbers().map((pageNum) => (
            <Button
              key={pageNum}
              variant={page === pageNum ? "default" : "outline"}
              size="sm"
              onClick={() => setPage(pageNum)}
              className={`rounded-xl transition-all duration-300 hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] min-w-[2.5rem] ${
                page === pageNum
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg'
                  : 'hover:bg-primary/10 border-primary/20 hover:border-primary/30'
              }`}
            >
              {pageNum}
            </Button>
          ))}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          disabled={page >= totalPages}
          onClick={() => setPage(page + 1)}
          className="hover:bg-primary/10 border-primary/20 hover:border-primary/30 rounded-xl transition-all duration-300 hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          Next
        </Button>
      </div>
      
      <div className="text-center mt-3">
        <span className="text-sm text-muted-foreground">
          Page {page} of {totalPages}
        </span>
      </div>
    </div>
  );
}
