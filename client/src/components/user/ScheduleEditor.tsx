'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

interface ScheduleEntry {
  day: string;
  startTime: string;
  endTime: string;
}

export default function ScheduleEditor({
  schedule,
  onChange,
}: {
  schedule: ScheduleEntry[];
  onChange: (updated: ScheduleEntry[]) => void;
}) {
  const handleChange = (index: number, field: keyof ScheduleEntry, value: string) => {
    const updated = [...schedule];
    updated[index][field] = value;
    onChange(updated);
  };

  const handleAdd = () => {
    onChange([...schedule, { day: 'Sunday', startTime: '09:00', endTime: '11:00' }]);
  };

  const handleRemove = (index: number) => {
    const updated = [...schedule];
    updated.splice(index, 1);
    onChange(updated);
  };

  return (
    <div className="space-y-3">
      <label className="font-medium">Schedule</label>
      {schedule.map((entry, index) => (
        <div key={index} className="flex items-center gap-2">
          <Select
            value={entry.day}
            onValueChange={(val) => handleChange(index, 'day', val)}
          >
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Day" />
            </SelectTrigger>
            <SelectContent>
              {days.map((day) => (
                <SelectItem key={day} value={day}>
                  {day}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="time"
            value={entry.startTime}
            onChange={(e) => handleChange(index, 'startTime', e.target.value)}
            className="w-28"
          />
          <Input
            type="time"
            value={entry.endTime}
            onChange={(e) => handleChange(index, 'endTime', e.target.value)}
            className="w-28"
          />

          <Button
            type="button"
            variant="destructive"
            onClick={() => handleRemove(index)}
          >
            ✕
          </Button>
        </div>
      ))}

      <Button type="button" variant="outline" onClick={handleAdd}>
        + Add Time Slot
      </Button>
    </div>
  );
}
