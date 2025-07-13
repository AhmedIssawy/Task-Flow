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
        <TableRow>
          <TableCell colSpan={columns.length + 1} className="text-center py-6">
            <Loader2 className="mx-auto h-5 w-5 animate-spin text-muted-foreground" />
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
            colSpan={columns.length + 1}
            className="text-center text-red-500 py-6"
          >
            <div className="space-y-2">
              <p>Failed to load data.</p>
              <Button variant="outline" size="sm" onClick={() => refetch?.()}>
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
        <TableRow>
          <TableCell
            colSpan={columns.length + 1}
            className="text-center text-muted-foreground py-6"
          >
            No data found.
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {rows.map((row, i) => (
        <TableRow key={i}>
          {columns.map((col, j) => (
            <TableCell key={j}>
              {typeof col.accessor === 'function'
                ? col.accessor(row)
                : (row as any)[col.accessor]}
            </TableCell>
          ))}
          {enableActions && (editHook || deleteHook) && (
            <TableCell>
              <div className="flex gap-2">
                {editHook && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(row)}
                  >
                    Edit
                  </Button>
                )}
                {deleteHook && (
                  <Button
                    variant="destructive"
                    size="sm"
                    className="text-red-500"
                    onClick={() => onDelete(row)}
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
