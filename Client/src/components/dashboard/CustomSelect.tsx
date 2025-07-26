import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CustomSelectProps {
  options: { label?: string; value: string | number }[];
  placeholder?: string | number;
  valueChangeAction?: (value: string) => void;
}

export default function CustomSelect({ options, placeholder, valueChangeAction }: CustomSelectProps) {
  return (
    <Select onValueChange={valueChangeAction}>
      <SelectTrigger className="w-[30px]">
        <SelectValue placeholder={String(placeholder)} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={String(option.value)}>
            {option.label ?? option.value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
