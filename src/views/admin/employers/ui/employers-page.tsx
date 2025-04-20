import {Employee} from "@/entities/employers/types";

import {employeeColumns} from "@/views/admin/employers/const";

import DataTable from "@/widgets/table";

const data: Employee[] = [
    { id: 1, firstName: "John", lastName: "Doe", age: 28 },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 34 },
    { id: 3, firstName: "Alice", lastName: "Johnson", age: 45 },
];

const EmployersPage = () => {
    return (
        <section>
            <h1 className="mb-6 text-3xl font-bold">Работодатели</h1>
            <DataTable columns={employeeColumns} data={data}/>
        </section>
    );
};

export default EmployersPage;