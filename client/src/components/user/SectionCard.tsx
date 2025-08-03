'use client';

import { Button } from '@/components/ui/button';
import {
  useUpdateSectionMutation,
  useDeleteSectionMutation,
} from '@/store/services/sectionApi';
import { Section } from '@/store/types/section';
import { Badge } from '@/components/ui/badge';
import AddStudentModal from '../admin/AddStudentModal';
import { useState } from 'react';
import EditSectionModal from './EditSectionModal';

export default function SectionCard({ section }: { section: Section }) {
  const [updateSection] = useUpdateSectionMutation();
  const [deleteSection] = useDeleteSectionMutation();
  const [addStudentOpen, setAddStudentOpen] = useState(false);
  const [editSectionOpen, setEditSectionOpen] = useState(false);

  const removeStudent = (studentId: string) => {
    const updated = section.students.filter((s: any) =>
      typeof s === 'string' ? s !== studentId : s._id !== studentId
    );
    updateSection({ sectionId: section._id, updates: { students: updated } });
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this section?')) {
      await deleteSection(section._id);
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-md space-y-4">
      <h3 className="text-lg font-bold">
        {section.code} - Level {section.level}
      </h3>
      <p>Capacity: {section.capacity}</p>
      <Button variant="destructive" size="sm" onClick={handleDelete} className='mr-2'>
        Delete
      </Button>
      <Button size="sm" onClick={() => setEditSectionOpen(true)}>Edit</Button>
      
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

      <Button onClick={() => setAddStudentOpen(true)}>Add Student</Button>

      <AddStudentModal
        open={addStudentOpen}
        onClose={() => setAddStudentOpen(false)}
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
      <EditSectionModal
        open={editSectionOpen}
        onClose={() => setEditSectionOpen(false)}
        section={section}
        onSave={(updates) =>
          updateSection({
            sectionId: section._id,
            updates,
          })
        }
      />
    </div>
  );
}
