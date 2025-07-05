'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

import PaginationControls from '../tables/PaginatedControls';
import DeleteModal from '../tables/DeleteModal';
import TableBodyRenderer from '../tables/TableBodyRenderer';
import type { PaginatedTableProps } from '@/constants/tableTypes';
import FormModal from '../tables/FormModal';

export function PaginatedTable<T>({
  queryHook,
  dataKey,
  columns,
  limit = 10,
  className,
  enableActions,
  deleteHook,
  editHook,
  createHook,
  editableFields = [],
  createFields = [],
}: PaginatedTableProps<T>) {
  const [page, setPage] = useState(1);
  const queryArgs = useMemo(() => ({ page, limit }), [page, limit]);
  const { data, isLoading, error, refetch } = queryHook(queryArgs);

  const rows: T[] = data?.[dataKey] || [];
  const totalPages: number = data?.totalPages || 1;

  const [itemToDelete, setItemToDelete] = useState<T | null>(null);
  const [itemToEdit, setItemToEdit] = useState<T | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [editFormData, setEditFormData] = useState<Record<string, any>>({});

  const [deleteFn, { isLoading: isDeleting }] = deleteHook?.() || [];
  const [editFn, { isLoading: isEditing }] = editHook?.() || [];
  const [createFn, { isLoading: isCreatingLoading }] = createHook?.() || [];

  const openEditModal = (item: T) => {
    const initialValues: Record<string, any> = {};
    editableFields.forEach((field) => {
      initialValues[field.key as string] = (item as any)[field.key];
    });
    setItemToEdit(item);
    setEditFormData(initialValues);
  };

  const openCreateModal = () => {
    setEditFormData({});
    setIsCreating(true);
  };

  const closeFormModal = () => {
    setItemToEdit(null);
    setIsCreating(false);
  };

  return (
    <>
      <div className={cn('w-full space-y-6', className)}>
        <div className="flex justify-end">
          {createHook && (
            <Button 
              onClick={openCreateModal} 
              className="ml-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Create New
            </Button>
          )}
        </div>

        <div className="glass-effect rounded-2xl border border-border/50 shadow-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border/50 hover:bg-muted/30 transition-colors">
                {columns.map((col, i) => (
                  <TableHead key={i} className="text-foreground font-semibold bg-muted/20 border-border/50">
                    {col.label}
                  </TableHead>
                ))}
                {enableActions && (editHook || deleteHook) && (
                  <TableHead className="text-foreground font-semibold bg-muted/20 border-border/50">
                    Actions
                  </TableHead>
                )}
              </TableRow>
            </TableHeader>

            <TableBodyRenderer
              isLoading={isLoading}
              error={error}
              refetch={refetch}
              rows={rows}
              columns={columns}
              enableActions={enableActions}
              editHook={editHook}
              deleteHook={deleteHook}
              onEdit={openEditModal}
              onDelete={setItemToDelete}
            />
          </Table>
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center">
            <PaginationControls
              page={page}
              totalPages={totalPages}
              setPage={setPage}
            />
          </div>
        )}
      </div>

      <DeleteModal
        item={itemToDelete}
        onClose={() => setItemToDelete(null)}
        onConfirm={async () => {
          if (!itemToDelete || !deleteFn) return;
          try {
            await deleteFn((itemToDelete as any)._id).unwrap?.();
            toast.success('Deleted successfully');
            setItemToDelete(null);
          } catch {
            toast.error('Failed to delete');
          }
        }}
        isLoading={isDeleting}
      />

      {/* creation modal */}
      <FormModal
        isOpen={isCreating}
        onClose={closeFormModal}
        title="Create Item"
        description="Fill in the fields to create an item"
        submitLabel="Create"
        fields={createFields || []}
        submitFn={(data) =>
          createFn!({
            ...data,
            universityId: '6823509b467cae38bbf7d69f', // TODO: make dynamic
          }).unwrap?.()
        }
      />

      {/* edit modal */}
      <FormModal
        isOpen={!!itemToEdit}
        onClose={closeFormModal}
        title="Edit Item"
        description="Update the fields and click save to apply changes."
        submitLabel="Save"
        initialData={editFormData}
        fields={editableFields || []}
        submitFn={(data) =>
          editFn!({ _id: (itemToEdit as any)._id, ...data }).unwrap?.()
        }
      />
    </>
  );
}
