'use client';

import React, { useEffect, useState } from 'react';
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
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

interface AssignableItem {
  id: string;
  label: string;
  currentCourses?: string[];
}

interface AssignModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  items: AssignableItem[];
  courseId: string;
  updateUser: (data: any) => { unwrap?: () => Promise<any> };
}

export default function AssignModal({
  isOpen,
  onClose,
  title = 'Assign Items',
  description = 'Select items to assign',
  items,
  courseId,
  updateUser,
}: AssignModalProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setSelectedIds([]);
  }, [isOpen]);

  const toggleSelection = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      await Promise.all(
        selectedIds.map((id) => {
          const currentCourses = items.find((i) => i.id === id)?.currentCourses || [];
          const updatedCourses = [...new Set([...currentCourses, courseId])];

          return updateUser({ _id: id, courses: updatedCourses }).unwrap?.();
        })
      );

      toast.success('Items assigned successfully');
      onClose();
    } catch {
      toast.error('Failed to assign one or more items');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="bg-black border border-border text-foreground shadow-xl sm:max-w-md rounded-lg space-y-4">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
          {items.length === 0 ? (
            <p className="text-muted-foreground text-sm">No items available.</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 border border-border p-2 rounded-md"
              >
                <Checkbox
                  id={item.id}
                  checked={selectedIds.includes(item.id)}
                  onCheckedChange={() => toggleSelection(item.id)}
                />
                <label htmlFor={item.id} className="text-sm cursor-pointer">
                  {item.label}
                </label>
              </div>
            ))
          )}
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel
            className="bg-muted hover:bg-muted/80"
            disabled={isSubmitting}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-primary text-white hover:bg-primary/90"
            onClick={handleSubmit}
            disabled={isSubmitting || selectedIds.length === 0}
          >
            {isSubmitting ? 'Assigning...' : 'Assign'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
