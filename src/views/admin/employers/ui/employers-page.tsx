"use client";

import {usersRequests} from "@/entities/users";
import { employeeColumns } from "@/views/admin/employers/const";

import DataTable from "@/widgets/table";
import {useQuery} from "@tanstack/react-query";
import Loader from "@/shared/components/loader";
import {useEffect} from "react";
import {useToast} from "@/shared/hooks/use-toast";

const EmployersPage = () => {
    const { toast } = useToast();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["employers"],
        queryFn: usersRequests.employers,
    });

    const dataTable = data?.items ?? [];

    useEffect(() => {
        if (isError) {
            toast({
                title: "Произошла ошибка",
                description: "Ошибка при загрузке данных работодателей",
                variant: "destructive",
            });
        }
    }, [isError, toast]);

    return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">Работодатели</h1>
        {isLoading ? (
            <Loader />
        ) : (
            <DataTable columns={employeeColumns} data={dataTable} />
        )}
    </section>
  );
};

export default EmployersPage;
