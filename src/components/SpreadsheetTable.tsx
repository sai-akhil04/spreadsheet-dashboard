import React from 'react';
import { useTable, Column } from 'react-table';

type RowData = {
  name: string;
  email: string;
  status: string;
};

const SpreadsheetTable: React.FC = () => {
  const data = React.useMemo<RowData[]>(
    () => [
      { name: 'John Doe', email: 'john@example.com', status: 'Active' },
      { name: 'Jane Smith', email: 'jane@example.com', status: 'Pending' },
      { name: 'Michael Brown', email: 'michael@example.com', status: 'Inactive' },
    ],
    []
  );

  const columns = React.useMemo<Column<RowData>[]>(
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
            {headerGroups.map((headerGroup, i) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                {headerGroup.headers.map((column, j) => (
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
            {rows.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={rowIndex} className="hover:bg-gray-50">
                  {row.cells.map((cell, cellIndex) => (
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
