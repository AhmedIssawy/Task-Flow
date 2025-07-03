'use client';

import { useMemo, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

interface Column<T> {
  label: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
}

interface RowAction<T> {
  label: string;
  onClick: (row: T) => void;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | 'secondary'
    | 'link';
}

interface PaginatedTableProps<T> {
  queryHook: (args: { page: number; limit: number }) => {
    data?: any;
    isLoading: boolean;
    error?: any;
  };
  dataKey: string;
  columns: Column<T>[];
  limit?: number;
  className?: string;
  enableActions?: boolean;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
}

export function PaginatedTable<T>({
  queryHook,
  dataKey,
  columns,
  limit = 10,
  className,
  enableActions,
  onEdit,
  onDelete,
}: PaginatedTableProps<T>) {
  const [page, setPage] = useState(1);
  const queryArgs = useMemo(() => ({ page, limit }), [page, limit]);
  const { data, isLoading, error } = queryHook(queryArgs);

  const rows: T[] = data?.[dataKey] || [];
  const totalPages: number = data?.totalPages || 1;

  return (
    <div className={cn('w-full space-y-4', className)}>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col, i) => (
                <TableHead key={i}>{col.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center py-6"
                >
                  <Loader2 className="mx-auto h-5 w-5 animate-spin text-muted-foreground" />
                </TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center text-red-500 py-6"
                >
                  Failed to load data.
                </TableCell>
              </TableRow>
            ) : rows.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center text-muted-foreground py-6"
                >
                  No data found.
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row, i) => (
                <TableRow key={i}>
                  {columns.map((col, j) => (
                    <TableCell key={j}>
                      {typeof col.accessor === 'function'
                        ? col.accessor(row)
                        : (row as any)[col.accessor]}
                    </TableCell>
                  ))}

                  {enableActions && (onEdit || onDelete) && (
                    <TableCell>
                      <div className="flex gap-2">
                        {onEdit && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onEdit(row)}
                          >
                            Edit
                          </Button>
                        )}
                        {onDelete && (
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => onDelete(row)}
                            className='text-red-500'
                          >
                            Delete
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
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
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
