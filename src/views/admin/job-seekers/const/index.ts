import {ColumnDef} from "@tanstack/react-table";
import {JobSeeker} from "@/entities/job-seekers/types";

export const jobSeekerColumns: ColumnDef<JobSeeker>[] = [
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