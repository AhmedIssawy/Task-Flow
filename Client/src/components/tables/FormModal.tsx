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
  submitFn: (data: any) => Promise<any> | undefined;
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
  if (isOpen) {
    setFormData(initialData);
  }
}, [isOpen]);

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
      <AlertDialogContent className="bg-black border border-border text-foreground shadow-xl sm:max-w-md rounded-lg space-y-4">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-3">
          {fields.map((field) => (
            <div key={field.key} className="space-y-1">
              <label className="text-sm font-medium">{field.label}</label>
              {field.inputType === 'select' ? (
                <select
                  className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                  value={formData[field.key] || ''}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                >
                  <option value="">Select</option>
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
                />
              )}
            </div>
          ))}
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
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : submitLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
