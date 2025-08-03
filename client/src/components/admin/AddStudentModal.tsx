import { useGetStudentsPageQuery } from '@/store/services/studentApi';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface AddStudentModalProps {
    open: boolean;
    onClose: () => void;
    section: { code: string };
    onAddStudent: (studentId: string) => void;
}

export default function AddStudentModal({ open, onClose, section, onAddStudent }: AddStudentModalProps) {
  const { data: studentsData } = useGetStudentsPageQuery({ page: 1, limit: 100 });

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Student to {section.code}</h2>
        <ul className="space-y-2 max-h-64 overflow-y-auto">
          {studentsData?.students.map((student) => (
            <li key={student._id} className="flex justify-between items-center">
              <span>{student.name}</span>
              <Button onClick={() => {
                onAddStudent(student._id);
                onClose();
              }}>
                Add
              </Button>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};
