import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

type Column<T> = {
  header: string;
  accessor: keyof T;
  cell?: (row: T) => React.ReactNode;
};

type Props<T> = {
  data: T[];
  columns: Column<T>[];
  selectable?: boolean;
  onRowSelect?: (row: T) => void;
  renderActions?: (row: T) => React.ReactNode;
};

export function DataTable<T>({
  data,
  columns,
  selectable = false,
  onRowSelect,
  renderActions,
}: Props<T>) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            {selectable && <TableHead className="w-10"><Checkbox /></TableHead>}
            {columns.map((col) => (
              <TableHead key={String(col.accessor)}>{col.header}</TableHead>
            ))}
            {renderActions && <TableHead>Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              {selectable && (
                <TableCell className="w-10">
                  <Checkbox onCheckedChange={() => onRowSelect?.(row)} />
                </TableCell>
              )}
              {columns.map((col) => (
                <TableCell key={String(col.accessor)}>
                  {col.cell ? col.cell(row) : String(row[col.accessor])}
                </TableCell>
              ))}
              {renderActions && <TableCell>{renderActions(row)}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
