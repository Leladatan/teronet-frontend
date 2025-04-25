import { employeeColumns } from "@/views/admin/employers/const";
import { employees } from "@/shared/mock";

import DataTable from "@/widgets/table";

const EmployersPage = () => {
  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">Работодатели</h1>
      <DataTable columns={employeeColumns} data={employees} />
    </section>
  );
};

export default EmployersPage;
