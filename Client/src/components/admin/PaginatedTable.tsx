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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface Column<T> {
  label: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
}

interface EditableField<T> {
  label: string;
  key: keyof T;
  type?: string;
}

interface PaginatedTableProps<T> {
  queryHook: (args: { page: number; limit: number }) => {
    data?: any;
    isLoading: boolean;
    error?: any;
  };
  dataKey: string;
  columns: Column<any>[];
  limit?: number;
  className?: string;
  enableActions?: boolean;
  deleteHook?: () => readonly [
    (id: string) => Promise<any>,
    { isLoading: boolean }
  ];
  editHook?: () => readonly [
    (data: any) => Promise<any>,
    { isLoading: boolean }
  ];
  editableFields?: EditableField<T>[];
}

export function PaginatedTable<T>({
  queryHook,
  dataKey,
  columns,
  limit = 10,
  className,
  enableActions,
  deleteHook,
  editHook,
  editableFields = [],
}: PaginatedTableProps<T>) {
  const [page, setPage] = useState(1);
  const queryArgs = useMemo(() => ({ page, limit }), [page, limit]);
  const { data, isLoading, error } = queryHook(queryArgs);

  const rows: T[] = data?.[dataKey] || [];
  const totalPages: number = data?.totalPages || 1;

  const [itemToDelete, setItemToDelete] = useState<T | null>(null);
  const [itemToEdit, setItemToEdit] = useState<T | null>(null);
  const [editFormData, setEditFormData] = useState<Record<string, any>>({});

  const [deleteFn, { isLoading: isDeleting }] = deleteHook?.() || [];
  const [editFn, { isLoading: isEditing }] = editHook?.() || [];

  const handleDelete = async () => {
    if (!itemToDelete || !deleteFn) return;
    try {
      await deleteFn((itemToDelete as any)._id).unwrap?.();
      toast.success('Deleted successfully');
      setItemToDelete(null);
    } catch {
      toast.error('Failed to delete');
    }
  };

  const handleEditSubmit = async () => {
    if (!itemToEdit || !editFn) return;
    try {
      await editFn({
        _id: (itemToEdit as any)._id,
        ...editFormData,
      }).unwrap?.();
      toast.success('Updated successfully');
      setItemToEdit(null);
    } catch {
      toast.error('Failed to update');
    }
  };

  const openEditModal = (item: T) => {
    setItemToEdit(item);
    const initialValues: Record<string, any> = {};
    editableFields.forEach((field) => {
      initialValues[field.key as string] = (item as any)[field.key];
    });
    setEditFormData(initialValues);
  };

  return (
    <>
      <div className={cn('w-full space-y-4', className)}>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((col, i) => (
                  <TableHead key={i}>{col.label}</TableHead>
                ))}
                {enableActions && (editHook || deleteHook) && (
                  <TableHead>Actions</TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length + 1}
                    className="text-center py-6"
                  >
                    <Loader2 className="mx-auto h-5 w-5 animate-spin text-muted-foreground" />
                  </TableCell>
                </TableRow>
              ) : error ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length + 1}
                    className="text-center text-red-500 py-6"
                  >
                    Failed to load data.
                  </TableCell>
                </TableRow>
              ) : rows.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length + 1}
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
                    {enableActions && (editHook || deleteHook) && (
                      <TableCell>
                        <div className="flex gap-2">
                          {editHook && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => openEditModal(row)}
                            >
                              Edit
                            </Button>
                          )}
                          {deleteHook && (
                            <Button
                              variant="destructive"
                              size="sm"
                              className="text-red-500"
                              onClick={() => setItemToDelete(row)}
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

      {/* Delete Modal */}
      {deleteHook && (
        <AlertDialog
          open={!!itemToDelete}
          onOpenChange={() => setItemToDelete(null)}
        >
          <AlertDialogContent className="bg-black border border-border text-foreground shadow-xl sm:max-w-md rounded-lg">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete{' '}
                <span className="font-medium text-destructive">
                  {(itemToDelete as any)?.name ?? 'this item'}
                </span>{' '}
                and cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                className="bg-muted hover:bg-muted/80"
                disabled={isDeleting}
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-destructive text-white hover:bg-destructive/90"
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

      {/* Edit Modal */}
      {editHook && (
        <AlertDialog
          open={!!itemToEdit}
          onOpenChange={() => setItemToEdit(null)}
        >
          <AlertDialogContent className="bg-black border border-border text-foreground shadow-xl sm:max-w-md rounded-lg space-y-4">
            <AlertDialogHeader>
              <AlertDialogTitle>Edit Item</AlertDialogTitle>
              <AlertDialogDescription>
                Update the fields and click save to apply changes.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <div className="space-y-3">
              {editableFields.map((field) => (
                <div key={String(field.key)} className="space-y-1">
                  <label className="text-sm font-medium">{field.label}</label>
                  <Input
                    type={field.type || 'text'}
                    value={editFormData[field.key as string] || ''}
                    onChange={(e) =>
                      setEditFormData((prev) => ({
                        ...prev,
                        [field.key]: e.target.value,
                      }))
                    }
                  />
                </div>
              ))}
            </div>

            <AlertDialogFooter>
              <AlertDialogCancel
                className="bg-muted hover:bg-muted/80"
                disabled={isEditing}
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-primary text-white hover:bg-primary/90"
                onClick={handleEditSubmit}
                disabled={isEditing}
              >
                {isEditing ? 'Saving...' : 'Save'}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}
