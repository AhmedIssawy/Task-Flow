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
  value?: string | number;
}

export default function CustomSelect({ options, placeholder, valueChangeAction, value }: CustomSelectProps) {
  return (
    <Select onValueChange={valueChangeAction} value={String(value)}>
      <SelectTrigger className="w-[65px] inline-flex mx-3">
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
