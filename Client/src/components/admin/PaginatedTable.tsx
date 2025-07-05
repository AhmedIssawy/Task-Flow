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
      <div className={cn('w-full space-y-4', className)}>
        <div className="flex justify-end">
          {createHook && (
            <Button onClick={openCreateModal} className="ml-auto">
              Create
            </Button>
          )}
        </div>

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
          <PaginationControls
            page={page}
            totalPages={totalPages}
            setPage={setPage}
          />
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
