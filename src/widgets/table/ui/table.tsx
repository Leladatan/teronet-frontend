'use client';

import { motion, AnimatePresence } from 'framer-motion';

import {
  Table as ShadcnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui/table';
import SelectLimit from '@/widgets/table/ui/components/select-limit';
import Pagination from '@/widgets/table/ui/components/pagination';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

interface Props<TData, TValue> {
  data: TData[];
  columns: ColumnDef<TData, TValue>[];
}

const DataTable = <TData extends object, TValue>({ data, columns }: Props<TData, TValue>) => {
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageIndex, setPageIndex] = useState<number>(1);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageIndex: pageIndex - 1, pageSize } },
    pageCount: Math.ceil(data.length / pageSize),
    manualPagination: false,
    state: { pagination: { pageIndex: pageIndex - 1, pageSize } },
    onPaginationChange: (updater) => {
      if (typeof updater === 'function') {
        const newState = updater(table.getState().pagination);
        setPageIndex(newState.pageIndex + 1);
        setPageSize(newState.pageSize);
      } else {
        setPageIndex(updater.pageIndex + 1);
        setPageSize(updater.pageSize);
      }
    },
  });

  const handlePageSizeChange = (value: string) => {
    const size = Number(value);
    setPageSize(size);
    setPageIndex(1);
    table.setPageSize(size);
  };

  const handlePreviousPage = () => {
    if (pageIndex > 1) {
      setPageIndex((prev) => prev - 1);
      table.previousPage();
    }
  };

  const handleNextPage = () => {
    if (pageIndex < table.getPageCount()) {
      setPageIndex((prev) => prev + 1);
      table.nextPage();
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-md border">
        <ShadcnTable>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            <AnimatePresence>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </motion.tr>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    Нет данных.
                  </TableCell>
                </TableRow>
              )}
            </AnimatePresence>
          </TableBody>
        </ShadcnTable>
      </div>
      <div className="flex items-center justify-between py-2">
        <SelectLimit pageSize={pageSize} handlePageSizeChange={handlePageSizeChange} />

        <Pagination<TData>
          table={table}
          pageIndex={pageIndex}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
      </div>
    </div>
  );
};

export default DataTable;
