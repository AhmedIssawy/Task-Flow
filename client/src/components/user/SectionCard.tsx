'use client';

import { Button } from '@/components/ui/button';
import { useUpdateSectionMutation } from '@/store/services/sectionApi';
import { Section } from '@/store/types/section';
import { Badge } from '@/components/ui/badge';
import AddStudentModal from '../admin/AddStudentModal';
import { useState } from 'react';

export default function SectionCard({ section }: { section: Section }) {
  const [updateSection] = useUpdateSectionMutation();
  const [open, setOpen] = useState(false);

  const removeStudent = (studentId: string) => {
    const updated = section.students.filter((s: any) =>
      typeof s === 'string' ? s !== studentId : s._id !== studentId
    );
    updateSection({ sectionId: section._id, updates: { students: updated } });
  };

  console.log('Section Card:', section);

  return (
    <div className="p-4 border rounded-xl shadow-md space-y-4">
      <h3 className="text-lg font-bold">
        {section.code} - Level {section.level}
      </h3>
      <p>Capacity: {section.capacity}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {section.schedule.map((slot) => (
          <div
            key={slot._id}
            className="bg-muted px-3 py-1 rounded-full text-sm font-medium text-muted-foreground"
          >
            {slot.day}: {slot.startTime} - {slot.endTime}
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Enrolled Students:</p>
        <div className="flex flex-wrap gap-2">
          {section.students.map((s: any) => (
            <Badge key={typeof s === 'string' ? s : s._id}>
              {typeof s === 'string' ? s : s.name}
              <button
                onClick={() => removeStudent(typeof s === 'string' ? s : s._id)}
                className="ml-1 text-xs"
              >
                ×
              </button>
            </Badge>
          ))}
        </div>
      </div>

      <Button onClick={() => setOpen(true)}>Add Student</Button>

      <AddStudentModal
        open={open}
        onClose={() => setOpen(false)}
        section={section}
        onAddStudent={(studentId) => {
          const updated = [
            ...section.students.map((s: any) =>
              typeof s === 'string' ? s : s._id
            ),
            studentId,
          ];
          updateSection({
            sectionId: section._id,
            updates: { students: updated },
          });
        }}
      />
    </div>
  );
}
