import {JobSeeker} from "@/entities/job-seekers/types";

import {jobSeekerColumns} from "@/views/admin/job-seekers/const";

import DataTable from "@/widgets/table";

const data: JobSeeker[] = [
    { id: 1, firstName: "John", lastName: "Doe", age: 28 },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 34 },
    { id: 3, firstName: "Alice", lastName: "Johnson", age: 45 },
];

const JobSeekersPage = () => {
    return (
        <section>
            <h1 className="mb-6 text-3xl font-bold">Соискатели</h1>
            <DataTable columns={jobSeekerColumns} data={data}/>
        </section>
    );
};

export default JobSeekersPage;