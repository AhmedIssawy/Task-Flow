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
      <AlertDialogContent className="glass-effect border border-border/50 text-foreground shadow-2xl sm:max-w-md rounded-2xl space-y-6 backdrop-blur-md">
        <AlertDialogHeader className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-primary/10">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <AlertDialogTitle className="text-xl font-bold text-gradient">{title}</AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-muted-foreground leading-relaxed">{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <div className="max-h-60 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <p className="text-muted-foreground text-sm">No items available to assign.</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="group flex items-center gap-3 border border-border/50 p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] hover:border-primary/20"
                onClick={() => toggleSelection(item.id)}
              >
                <Checkbox
                  id={item.id}
                  checked={selectedIds.includes(item.id)}
                  onCheckedChange={() => toggleSelection(item.id)}
                  className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label htmlFor={item.id} className="text-sm cursor-pointer flex-1 text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.label}
                </label>
                {selectedIds.includes(item.id) && (
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                )}
              </div>
            ))
          )}
        </div>

        <AlertDialogFooter className="gap-3">
          <AlertDialogCancel
            className="hover:bg-muted/80 border-border/50 hover:border-muted/80 rounded-xl transition-all duration-300 hover:shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            disabled={isSubmitting}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            onClick={handleSubmit}
            disabled={isSubmitting || selectedIds.length === 0}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                Assigning...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Assign ({selectedIds.length})
              </div>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
