'use client';

import { useState, useEffect } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { HOTKEY_KEYS } from '@/constants/hotkeyConfig';

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

  // Add Enter key support for form submission
  useHotkeys(HOTKEY_KEYS.ENTER, handleSubmit, {
    enabled: isOpen && !isSubmitting,
    preventDefault: true,
    enableOnFormTags: true,
  });

  return (
    <Dialog open={isOpen} onOpenChange={(open: boolean) => !open && onClose()}>
      <DialogContent className="backdrop-blur-xl bg-background/95 border border-border/30 text-foreground shadow-2xl shadow-primary/10 sm:max-w-md rounded-2xl space-y-6 p-6">
        {/* Decorative gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl pointer-events-none" />

        <DialogHeader className="relative space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div>
              <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground mt-1">{description}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="relative space-y-4">
          {fields.map((field) => (
            <div key={field.key} className="space-y-2">
              <label className="text-sm font-medium text-foreground/90 flex items-center space-x-2">
                <span>{field.label}</span>
                {field.type === 'email' && (
                  <svg className="w-3 h-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                )}
                {field.type === 'password' && (
                  <svg className="w-3 h-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )}
              </label>
              {field.inputType === 'select' ? (
                <select
                  className="w-full p-3 border border-border/50 rounded-xl bg-background/50 text-foreground backdrop-blur-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
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
                  className="w-full p-3 border border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                />
              )}
            </div>
          ))}
        </div>

        <DialogFooter className="relative flex space-x-3 pt-6">
          <Button
            variant="outline"
            className="flex-1 bg-muted/50 hover:bg-muted/80 border-border/30 rounded-xl py-3 transition-all duration-200"
            disabled={isSubmitting}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl rounded-xl py-3 transition-all duration-200"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing...</span>
              </div>
            ) : submitLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
