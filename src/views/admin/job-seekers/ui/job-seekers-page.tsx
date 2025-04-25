import { jobSeekerColumns } from "@/views/admin/job-seekers/const";

import DataTable from "@/widgets/table";

const JobSeekersPage = () => {
  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">Соискатели</h1>
      <DataTable columns={jobSeekerColumns} data={[]} />
    </section>
  );
};

export default JobSeekersPage;
