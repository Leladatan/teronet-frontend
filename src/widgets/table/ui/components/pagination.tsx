import { Table } from '@tanstack/table-core';

import { Button } from '@/shared/components/ui/button';

interface Props<TData> {
  table: Table<TData>;
  pageIndex: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

const Pagination = <TData extends object>({
  table,
  pageIndex,
  handleNextPage,
  handlePreviousPage,
}: Props<TData>) => {
  const pageCount = table.getPageCount();

  const getPageNumbers = () => {
    if (pageCount <= 5) {
      return Array.from({ length: pageCount }, (_, i) => i + 1);
    }

    return [1, 2, 3, -1, pageCount];
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center space-x-2 select-none">
      <Button
        variant="outline"
        size="sm"
        onClick={handlePreviousPage}
        disabled={pageIndex === 1}
        aria-label="Предыдущая страница"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Предыдущая
      </Button>

      <nav aria-label="Пагинация">
        <ul className="flex space-x-1">
          {pageNumbers.map((pageNum, idx) =>
            pageNum === -1 ? (
              <li key={'dots-' + idx} className="flex items-center px-2 select-none">
                ...
              </li>
            ) : (
              <li key={pageNum}>
                <button
                  onClick={() => table.setPageIndex(pageNum - 1)}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    pageNum === pageIndex
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-blue-100 text-gray-700'
                  }`}
                  aria-current={pageNum === pageIndex ? 'page' : undefined}
                  aria-label={`Страница ${pageNum}`}
                >
                  {pageNum}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>

      <Button
        variant="outline"
        size="sm"
        onClick={handleNextPage}
        disabled={pageIndex === pageCount}
        aria-label="Следующая страница"
      >
        Следующая
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Button>
    </div>
  );
};

export default Pagination;
