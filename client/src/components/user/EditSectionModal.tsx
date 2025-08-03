'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Section } from '@/store/types/section';
import { useState } from 'react';
import ScheduleEditor from './ScheduleEditor';

interface EditSectionModalProps {
  open: boolean;
  onClose: () => void;
  section: Section;
  onSave: (updates: Partial<Section>) => void;
}

export default function EditSectionModal({
  open,
  onClose,
  section,
  onSave,
}: EditSectionModalProps) {
  const [form, setForm] = useState({
    code: section.code || '',
    level: section.level || '',
    capacity: section.capacity || 40,
    schedule: section.schedule || [],
    teachers: section.teachers || [],
    students: section.students || [],
  });

  const handleSubmit = () => {
    onSave(form);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Section</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            value={form.code}
            onChange={(e) => setForm({ ...form, code: e.target.value })}
            placeholder="Section Code"
          />
          <Input
            type="number"
            value={form.level}
            onChange={(e) => setForm({ ...form, level: Number(e.target.value) })}
            placeholder="Level"
          />
          <Input
            type="number"
            value={form.capacity}
            onChange={(e) => setForm({ ...form, capacity: Number(e.target.value) })}
            placeholder="Capacity"
          />

          <ScheduleEditor
            schedule={form.schedule}
            onChange={(updatedSchedule) =>
              setForm({ ...form, schedule: updatedSchedule })
            }
          />
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
