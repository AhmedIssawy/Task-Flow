export interface Column<T> {
  label: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
}

export interface EditableField<T> {
  label: string;
  key: keyof T;
  type?: string;
}

interface Field {
  label: string;
  key: string;
  type?: string;
  inputType?: 'input' | 'select';
  options?: { label: string; value: string }[];
}


export interface PaginatedTableProps<T> {
  queryResult: {
    data?: { [key: string]: any; totalPages?: number };
    isLoading: boolean;
    error?: unknown;
    refetch?: () => void;
  };
  dataKey: string;
  columns: Column<T>[];
  className?: string;
  enableActions?: boolean;
  deleteHook?: () => readonly [
    (id: string) => Promise<any> & { unwrap?: () => Promise<any> },
    { isLoading: boolean }
  ];
  editHook?: () => readonly [
    (data: any) => Promise<any> & { unwrap?: () => Promise<any> },
    { isLoading: boolean }
  ];
  createHook?: () => readonly [
    (data: any) => Promise<any> & { unwrap?: () => Promise<any> },
    { isLoading: boolean }
  ];
  editableFields?: EditableField<T>[];
  createFields?: Field[];
}
