import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';

interface Column<T> {
  label: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
}

interface TableBodyRendererProps<T> {
  isLoading: boolean;
  error: any;
  refetch?: () => void;
  rows: T[];
  columns: Column<T>[];
  enableActions?: boolean;
  editHook?: any;
  deleteHook?: any;
  onEdit: (row: T) => void;
  onDelete: (row: T) => void;
}

export default function TableBodyRenderer<T>({
  isLoading,
  error,
  refetch,
  rows,
  columns,
  enableActions,
  editHook,
  deleteHook,
  onEdit,
  onDelete,
}: TableBodyRendererProps<T>) {
  if (isLoading) {
    return (
      <TableBody>
        <TableRow className="hover:bg-muted/30 transition-colors">
          <TableCell colSpan={columns.length + 1} className="text-center py-12">
            <div className="flex flex-col items-center space-y-3">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-muted-foreground">Loading data...</p>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  if (error) {
    return (
      <TableBody>
        <TableRow className="hover:bg-muted/30 transition-colors">
          <TableCell
            colSpan={columns.length + 1}
            className="text-center py-12"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 rounded-full bg-destructive/10">
                <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="space-y-2 text-center">
                <p className="text-destructive font-medium">Failed to load data</p>
                <p className="text-muted-foreground text-sm">Please try again or contact support if the problem persists</p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => refetch?.()} 
                className="hover:bg-primary/10 border-primary/20 hover:border-primary/30 rounded-xl transition-all duration-300"
              >
                Retry
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  if (rows.length === 0) {
    return (
      <TableBody>
        <TableRow className="hover:bg-muted/30 transition-colors">
          <TableCell
            colSpan={columns.length + 1}
            className="text-center py-12"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 rounded-full bg-muted/50">
                <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <div className="space-y-1 text-center">
                <p className="text-foreground font-medium">No data found</p>
                <p className="text-muted-foreground text-sm">There are no items to display at the moment</p>
              </div>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {rows.map((row, i) => (
        <TableRow 
          key={i} 
          className="hover:bg-muted/30 transition-all duration-200 border-border/50 group cursor-pointer"
        >
          {columns.map((col, j) => (
            <TableCell key={j} className="text-foreground group-hover:text-foreground/90 transition-colors border-border/50">
              {typeof col.accessor === 'function'
                ? col.accessor(row)
                : (row as any)[col.accessor]}
            </TableCell>
          ))}
          {enableActions && (editHook || deleteHook) && (
            <TableCell className="border-border/50">
              <div className="flex gap-2">
                {editHook && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(row)}
                    className="hover:bg-primary/10 border-primary/20 hover:border-primary/30 text-primary hover:text-primary rounded-xl transition-all duration-300 hover:shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Edit
                  </Button>
                )}
                {deleteHook && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onDelete(row)}
                    className="hover:bg-destructive/10 border-destructive/20 hover:border-destructive/30 text-destructive hover:text-destructive rounded-xl transition-all duration-300 hover:shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Delete
                  </Button>
                )}
              </div>
            </TableCell>
          )}
        </TableRow>
      ))}
    </TableBody>
  );
}
