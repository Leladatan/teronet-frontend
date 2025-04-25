import { ColumnDef } from "@tanstack/react-table";
import { Employee } from "@/entities/employers/types";

export const employeeColumns: ColumnDef<Employee>[] = [
  {
    accessorKey: "lastName",
    header: "Фамилия",
  },
  {
    accessorKey: "firstName",
    header: "Имя",
  },
  {
    accessorKey: "age",
    header: "Возраст",
  },
];
