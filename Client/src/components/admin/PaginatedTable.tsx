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
      <div className={cn("space-y-6", className)}>
        {/* Header with Create Button */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-foreground">Data Management</h3>
            <p className="text-sm text-muted-foreground">
              Manage and organize your data with advanced filtering and actions
            </p>
          </div>
          {createHook && (
            <Button
              onClick={openCreateModal}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl px-6 py-2.5"
            >
              <svg className="w-4 h-4 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create New
            </Button>
          )}
        </div>

        {/* Modern Table Container with Glass Effect */}
        <div className="relative backdrop-blur-xl bg-background/95 border border-border/90 rounded-2xl lg:rounded-3xl shadow-2xl shadow-primary/10 overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

          {/* Table Header with Enhanced Styling */}
          <div className="relative border-b border-border/70 bg-gradient-to-r from-muted/50 to-muted/30 backdrop-blur-sm">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-border/70">
                  {columns.map((col, i) => (
                    <TableHead
                      key={i}
                      className="text-foreground/90 font-semibold text-sm py-4 px-6 first:ps-8 last:pe-8"
                    >
                      {col.label}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
            </Table>
          </div>

          {/* Table Body with Enhanced Renderer */}
          <div className="relative">
            <Table>
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

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-full translate-y-12 -translate-x-12 pointer-events-none" />
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