import { Typography } from '@mui/material';
import React, { useEffect, useState, useMemo } from 'react';
import { useTable, useGlobalFilter, usePagination, useSortBy } from 'react-table';

import style from './table.module.scss';

const Table = () => {
    const [tableData, setTableData] = useState([]);

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    };

    const cols = [
        {
            Header: 'Coin',
            accessor: 'image',
            Cell: tableProps => (
                <img 
            src={tableProps.row.original.image} 
            alt={data.name}
            width={50}
            />
            )
        },
        {
            accessor: 'name',
        },
        {
            accessor: 'symbol',
        },
        {
            Header: 'Price',
            accessor: 'current_price'
        },
        {
            Header: '24h Change',
            accessor: 'price_change_percentage_24h',
        },
        {
            Header: 'Market Cap',
            accessor: 'market_cap'
        }
    ]


    const columns = useMemo(() => cols, [])
    const data = useMemo(() => tableData, [tableData])

    const tableInstance = useTable(
        {
            columns,
            data
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        prepareRow,
        pageOptions,
        setPageSize,
        state,
        setGlobalFilter,
      } = tableInstance;

      const { globalFilter, pageIndex, pageSize } = state;


    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h')
        .then((res) => {
            return res.json();
        }).then((data) => {
            setTableData(data)
        })
    }, []);

    return (
        <div style={{ background: '#141414' }}>
            <Typography
            variant='h4'
            sx={{ color: 'white', textAlign: 'center', paddingTop: '20px' }}
            >
            Cryptocurrency Prices by Market Cap
            </Typography>

            <table
            className={`${style.table}`}
            {...getTableProps()} >
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr className={`${style.table__headerRow}`}
                    {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th
                        className={`${style.table__th}`}
                        {...column.getHeaderProps(
                            column.getSortByToggleProps({ title: undefined })
                        )}
                        >
                        {column.render("Header")}
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
                            <td {...cell.getCellProps()}>
                            {[
                                '24h Change'
                            ].includes(cell.column.Header) &&
                            (cell.value || cell.value === 0)
                            ? (cell.value).toFixed(2) + ` %`
                            : [
                                'Price'
                            ].includes(cell.column.Header) &&
                            (cell.value || cell.value === 0)
                            ? `$ ` + numberWithCommas(cell.value.toFixed(2))
                            : [
                                'Market Cap'
                            ].includes(cell.column.Header) &&
                            (cell.value || cell.value === 0)
                            ? `$ ` + numberWithCommas(cell.value)
                            : cell.render("Cell")}</td>
                        );
                        })}
                    </tr>
                    );
                })}
                </tbody>
            </table>
            <div
                className={`${style.pagination}`}
            >
                <select
                className={`${style.pagination__select}`}
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                >
                {[10, 30, 50].map((pageSize) => (
                    <option 
                    className={`${style.pagination__option}`}
                    key={pageSize} 
                    value={pageSize}
                    >
                    Show {pageSize}
                    </option>
                ))}
                </select>
                <div
                onClick={() => previousPage()}
                className={`${style.pagination__btn}`}
                >
                Previous
                </div>
                <div
                onClick={() => nextPage()}
                className={`${style.pagination__btn}`}
                >
                Next
                </div>
                <span
                style={{ color: 'white' }}>
                Page{" "}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
                </span>
            </div>
        </div>
    )

}

export default Table;