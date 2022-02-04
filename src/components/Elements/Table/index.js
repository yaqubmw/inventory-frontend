import React from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import "components/Elements/Table/table.css";
import { SearchIcon, ArrowFirstIcon, ArrowLastIcon, ArrowLeftIcon, ArrowRightIcon } from "components/Icons";

function Table({ columns, data }) {
  const props = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
  } = props;
  console.log(props);
  React.useEffect(() => {
    // props.dispatch({ type: actions.resetPage })
    console.log(globalFilter);
  }, [globalFilter]);

  return (
    <div className="content">
      <div className="grid-10">
        <div className="grid-search">
          <div className="icon-24">
            <SearchIcon />
          </div>
          <input
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder={"Search"}
            className="search"
          />
          <div className="tools">
            <div className="comp">Comp</div>
            <div className="comp">CSV</div>
          </div>
        </div>
        <div className="grid-table">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                      {/* Render the columns filter UI */}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="pagination">
            <div className="pagenav">
              <button
                className="icon-24"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                {<ArrowFirstIcon />}
              </button>
              <button
                className="icon-24"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                {<ArrowLeftIcon />}
              </button>
              <button
                className="icon-24"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                {<ArrowRightIcon />}
              </button>
              <button
                className="icon-24"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                {<ArrowLastIcon />}
              </button>
            </div>
            <span>
              Page
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <span>
              | Go to page:
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
                style={{ width: "50px" }}
              />
            </span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
