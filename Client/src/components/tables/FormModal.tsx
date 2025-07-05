'use client';

import { useState, useEffect } from 'react';
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
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface Field {
  label: string;
  key: string;
  type?: string;
  inputType?: 'input' | 'select';
  options?: { label: string; value: string }[];
}

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  submitLabel?: string;
  submitFn: (data: any) => Promise<any>;
  fields: Field[];
  initialData?: Record<string, any>;
}

export default function FormModal({
  isOpen,
  onClose,
  title = 'Submit Form',
  description = 'Fill in the fields and submit.',
  submitLabel = 'Submit',
  submitFn,
  fields,
  initialData = {},
}: FormModalProps) {
  const [formData, setFormData] = useState<Record<string, any>>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData((prev) => {
      const prevStr = JSON.stringify(prev);
      const nextStr = JSON.stringify(initialData);
      return prevStr === nextStr ? prev : initialData;
    });
  }, [initialData]);

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      await submitFn(formData);
      toast.success('Submitted successfully');
      onClose();
    } catch {
      toast.error('Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="glass-effect border border-border/50 text-foreground shadow-2xl sm:max-w-md rounded-2xl space-y-6 backdrop-blur-md">
        <AlertDialogHeader className="space-y-3">
          <AlertDialogTitle className="text-xl font-bold text-gradient">{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-muted-foreground">{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-4">
          {fields.map((field) => (
            <div key={field.key} className="space-y-2">
              <label className="text-sm font-medium text-foreground">{field.label}</label>
              {field.inputType === 'select' ? (
                <select
                  className="w-full p-3 border border-border/50 rounded-xl bg-background/50 text-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 backdrop-blur-sm"
                  value={formData[field.key] || ''}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                >
                  <option value="">Select an option</option>
                  {field.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : (
                <Input
                  type={field.type || 'text'}
                  value={formData[field.key] || ''}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className="border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-xl transition-all duration-300 bg-background/50 backdrop-blur-sm"
                />
              )}
            </div>
          ))}
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
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                Submitting...
              </div>
            ) : (
              submitLabel
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
