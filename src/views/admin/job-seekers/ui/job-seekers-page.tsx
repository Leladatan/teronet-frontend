"use client";

import { usersRequests } from "@/entities/users";
import { jobSeekerColumns } from "@/views/admin/job-seekers/const";

import DataTable from "@/widgets/table";
import {useQuery} from "@tanstack/react-query";
import Loader from "@/shared/components/loader";
import {useEffect} from "react";
import {useToast} from "@/shared/hooks/use-toast";

const JobSeekersPage = () => {
    const { toast } = useToast();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["job_seekers"],
        queryFn: usersRequests.job_seekers,
    });

    const dataTable = data?.items ?? [];

    useEffect(() => {
        if (isError) {
            toast({
                title: "Произошла ошибка",
                description: "Ошибка при загрузке данных соискателей",
                variant: "destructive",
            });
        }
    }, [isError, toast]);

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">Соискатели</h1>
        {isLoading ? (
            <Loader />
        ) : (
            <DataTable columns={jobSeekerColumns} data={dataTable} />
        )}
    </section>
  );
};

export default JobSeekersPage;
