'use client';

import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { useCreateSectionMutation } from '@/store/services/sectionApi';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ScheduleEditor from './ScheduleEditor';
import { toast } from 'sonner';

export default function CreateSectionModal({
  open,
  onClose,
  universityId,
  collegeId,
  departmentId,
  courseId,
}: {
  open: boolean;
  onClose: () => void;
  universityId: string;
  collegeId: string;
  departmentId: string;
  courseId: string;
}) {
  const [createSection] = useCreateSectionMutation();
  const [form, setForm] = useState({
    code: '',
    level: '',
    capacity: 40,
    schedule: [],
    teachers: [],
    students: [],
  });

  const handleSubmit = async () => {
    console.log('Section created:', {payload: {...form, course: courseId }});
    await createSection({
      universityId,
      collegeId,
      departmentId,
      payload: {...form, course: courseId },
    }).finally(() => {
      toast.success('Section created successfully');
    });
    
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>Create New Section</DialogHeader>

        <Input
          placeholder="Section Code"
          value={form.code}
          onChange={(e) => setForm({ ...form, code: e.target.value })}
        />
        <Input
          placeholder="Level"
          value={form.level}
          onChange={(e) => setForm({ ...form, level: e.target.value })}
        />
        <Input
          type="number"
          placeholder="Capacity"
          value={form.capacity}
          onChange={(e) => setForm({ ...form, capacity: +e.target.value })}
        />

        <ScheduleEditor
          schedule={form.schedule}
          onChange={(updatedSchedule) =>
            setForm({ ...form, schedule: updatedSchedule })
          }
        />

        <Button onClick={handleSubmit}>Create Section</Button>
      </DialogContent>
    </Dialog>
  );
}
