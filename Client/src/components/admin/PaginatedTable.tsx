'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

import DeleteModal from '../tables/DeleteModal';
import TableBodyRenderer from '../tables/TableBodyRenderer';
import type { PaginatedTableProps } from '@/constants/tableTypes';
import FormModal from '../tables/FormModal';

export function PaginatedTable<T>({
  queryResult,
  dataKey,
  columns,
  className,
  enableActions,
  deleteHook,
  editHook,
  createHook,
  editableFields = [],
  createFields = [],
}: PaginatedTableProps<T>) {

  const { data, isLoading, error, refetch } = queryResult;
  const rows: T[] = Array.isArray(data) ? data : data?.[dataKey] || [];
  console.log(data, rows, dataKey);
  

  const [itemToDelete, setItemToDelete] = useState<T | null>(null);
  const [itemToEdit, setItemToEdit] = useState<T | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [editFormData, setEditFormData] = useState<Record<string, any>>({});

  const [deleteFn, { isLoading: isDeleting } = { isLoading: false }] =
    deleteHook?.() || [];
  const [editFn, { isLoading: isEditing } = { isLoading: false }] =
    editHook?.() || [];
  const [createFn, { isLoading: isCreatingLoading } = { isLoading: false }] =
    createHook?.() || [];

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
      <div className={cn(className)}>
        <div className="flex justify-end">
          {createHook && (
            <Button onClick={openCreateModal} className="ml-auto">
              Create
            </Button>
          )}
        </div>

        <div className="rounded-md border max-w-full">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((col, i) => (
                  <TableHead key={i}>{col.label}</TableHead>
                ))}
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

      {/* Creation Modal */}
      <FormModal
        isOpen={isCreating}
        onClose={closeFormModal}
        title="Create Item"
        description="Fill in the fields to create an item"
        submitLabel="Create"
        fields={createFields}
        submitFn={(data) =>
          createFn!({
            ...data,
            universityId: '6823509b467cae38bbf7d69f', // TODO: Make dynamic
          }).unwrap?.()
        }
      />

      {/* Edit Modal */}
      <FormModal
        isOpen={!!itemToEdit}
        onClose={closeFormModal}
        title="Edit Item"
        description="Update the fields and click save to apply changes."
        submitLabel="Save"
        initialData={editFormData}
        fields={editableFields}
        submitFn={(data) =>
          editFn!({ _id: (itemToEdit as any)._id, ...data }).unwrap?.()
        }
      />
    </>
  );
}
