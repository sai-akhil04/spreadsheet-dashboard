import { useMemo } from 'react';
import { useTable } from 'react-table';

type RowData = {
  name: string;
  email: string;
  status: string;
};

const SpreadsheetTable = () => {
  const data = useMemo<RowData[]>(
    () => [
      { name: 'John Doe', email: 'john@example.com', status: 'Active' },
      { name: 'Jane Smith', email: 'jane@example.com', status: 'Pending' },
      { name: 'Michael Brown', email: 'michael@example.com', status: 'Inactive' },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Status', accessor: 'status' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="overflow-x-auto px-6 py-4">
      <div className="border border-gray-300 rounded-md shadow bg-white overflow-hidden">
        <table {...getTableProps()} className="min-w-full text-sm text-left">
          <thead className="bg-gray-100">
            {headerGroups.map((headerGroup: any, i: number) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                {headerGroup.headers.map((column: any, j: number) => (
                  <th
                    {...column.getHeaderProps()}
                    key={j}
                    className="px-4 py-2 border-b font-semibold text-gray-600"
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row: any, rowIndex: number) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={rowIndex} className="hover:bg-gray-50">
                  {row.cells.map((cell: any, cellIndex: number) => (
                    <td
                      {...cell.getCellProps()}
                      key={cellIndex}
                      className="px-4 py-2 border-b"
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpreadsheetTable;
