import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import { PopupActions } from '../admin/PopupActions';
import React from 'react';

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

function TableBodyRenderer<T>({
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
        <TableRow>
          <TableCell colSpan={columns.length} className="text-center py-12 border border-border/70">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <div className="absolute inset-0 h-8 w-8 rounded-full border-2 border-primary/20" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">Loading data...</p>
                <p className="text-xs text-muted-foreground">Please wait while we fetch your information</p>
              </div>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  if (error) {
    return (
      <TableBody>
        <TableRow>
          <TableCell
            colSpan={columns.length}
            className="text-center py-12 border border-border/70"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="space-y-2 text-center">
                <p className="text-sm font-medium text-foreground">Failed to load data</p>
                <p className="text-xs text-muted-foreground">There was an error loading your information</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => refetch?.()}
                  className="mt-3 bg-background/50 hover:bg-background/80 border-border/50"
                >
                  <svg className="w-4 h-4 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Try Again
                </Button>
              </div>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  if (rows.length === 0) {
    return (
      <TableBody>
        <TableRow>
          <TableCell
            colSpan={columns.length}
            className="text-center py-12 border border-border/70"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <div className="space-y-1 text-center">
                <p className="text-sm font-medium text-foreground">No data found</p>
                <p className="text-xs text-muted-foreground">There are no items to display at the moment</p>
              </div>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {rows.map((row, i) => {
        return (
          <TableRow
            key={i}
            className="relative group hover:bg-gradient-to-r hover:from-muted/30 hover:to-transparent transition-all duration-200 border-b border-border/70"
          >
            {columns.map((col, j) => (
              <TableCell
                key={j}
                className="py-4 px-6 first:ps-8 last:pe-12 text-sm text-foreground/90 border-r border-border/100 last:border-r-0"
              >
                <div className="flex items-center space-x-2">
                  {typeof col.accessor === 'function'
                    ? col.accessor(row)
                    : (row as any)[col.accessor]}
                </div>
                {enableActions && (editHook || deleteHook) && (
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    <PopupActions
                      item={row}
                      enableEdit={!!editHook}
                      enableDelete={!!deleteHook}
                      onEdit={onEdit}
                      onDelete={onDelete}
                    />
                  </div>
                )}
              </TableCell>
            ))}

          </TableRow>
        );
      })}
    </TableBody>
  );
}

export default React.memo(TableBodyRenderer);