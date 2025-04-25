import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/entities/users/types";

export const employeeColumns: ColumnDef<User>[] = [
  {
    accessorKey: "lastName",
    header: "Фамилия",
  },
  {
    accessorKey: "firstName",
    header: "Имя",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "telegram",
    header: "Telegram",
  },
];
