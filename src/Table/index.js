import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, } from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from '@/components/ui/table';
import { cn, transformLabel } from '@/lib/utils';
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable, getFilteredRowModel, } from '@tanstack/react-table';
import { useEffect, useRef, useState } from 'react';
import { MdDownload } from 'react-icons/md';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import SideSheet from './SideSheet';
import Spinner from './Spinner';
import { TextMedium, TextSmall } from '@/components/ui/typography';
import { Flex } from '@/components/ui/style-elements';
import { DatePickerWithRange } from './DateRangePicker';
export function DataTable({ columns, isBorder, data, totalCount, isDataLoading, showFilter, pagination, setPagination, filterField, setFilterField, filterInput, setFilterinput, showDownloadButton, isSideSheet, showPagination, filterFields, tableHeight = '75vh', onIndividualFilterFieldChange, addItemToTablist, dateRange, setDateRange, }) {
    const [columnFilters, setColumnFilters] = useState([]);
    const [selectedRowId, setSelectedRowId] = useState('');
    const initialRowRef = useRef();
    const [selectedRowData, setSelectedRowData] = useState();
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        manualPagination: true,
        onPaginationChange: setPagination,
        rowCount: totalCount,
        state: {
            columnFilters,
            pagination,
        },
    });
    const dateRangeProps = {
        ...(dateRange !== undefined && { value: dateRange }),
        ...(setDateRange !== undefined && {
            onValueChange: (value) => setDateRange(value),
        }),
    };
    const getPageNumbers = () => {
        const pageNumbers = [];
        const halfPageLimit = Math.floor(5 / 2);
        const totalPages = Math.ceil(table.getRowCount() / Number(table.getState().pagination.pageSize));
        const currentPage = table.getState().pagination.pageIndex;
        if (totalPages <= 5) {
            for (let i = 0; i < totalPages; i++) {
                pageNumbers.push(i);
            }
        }
        else {
            pageNumbers.push(0);
            let startPage = Math.max(currentPage - halfPageLimit, 1);
            let endPage = Math.min(currentPage + halfPageLimit, totalPages - 2);
            if (currentPage <= halfPageLimit) {
                startPage = 1;
                endPage = 5 - 2;
            }
            if (currentPage >= totalPages - halfPageLimit) {
                startPage = totalPages - 5 + 1;
                endPage = totalPages - 2;
            }
            if (startPage > 1) {
                pageNumbers.push('...');
            }
            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }
            if (endPage < totalPages - 2) {
                pageNumbers.push('...');
            }
            pageNumbers.push(totalPages - 1);
        }
        if (pageNumbers.length < 6) {
            pageNumbers.filter((p) => p !== '...');
        }
        return pageNumbers;
    };
    let columnOptions = [];
    columnOptions = columns.map((column) => {
        //@ts-expect-error
        return column.accessorKey;
    });
    const handleFilter = (value) => {
        setFilterField(value);
    };
    useEffect(() => {
        if (data.length) {
            setSelectedRowData(table.getRowModel().rows[0].original);
            setSelectedRowId(table.getRowModel().rows[0]?.id);
        }
    }, [data]);
    return (_jsxs("div", { style: {
            height: tableHeight,
        }, className: cn(`rounded-lg relative z-0 flex w-full h-full `, isBorder ? 'border' : ''), children: [_jsxs("div", { className: cn('flex flex-col h-full', isSideSheet ? 'w-[75%]' : 'w-[100%]'), children: [(showFilter || showDownloadButton) && (_jsxs("div", { className: "flex items-left p-4 space-x-4 relative w-full", children: [showFilter && (_jsxs(_Fragment, { children: [_jsx(Input, { className: "width-[20%] max-w-[20%]", placeholder: filterField ? `Filter by ${filterField}` : 'Select Filter Field', value: filterInput, disabled: !filterField, onChange: (event) => {
                                            setPagination((p) => ({
                                                pageIndex: 0,
                                                pageSize: pagination.pageSize,
                                            }));
                                            setFilterinput(event.target.value);
                                            // table
                                            //   .getColumn(filterField)
                                            //   ?.setFilterValue(event.target.value);
                                        } }), _jsxs(Select
                                    //@ts-expect-error
                                    , { 
                                        //@ts-expect-error
                                        className: "absolute", onValueChange: (value) => handleFilter(value), children: [_jsx(SelectTrigger, { className: "w-[180px]", children: _jsx(SelectValue, { placeholder: "Select Filter Field" }) }), _jsx(SelectContent, { className: "z-[100]", children: columnOptions &&
                                                    columnOptions.map((option) => {
                                                        if (transformLabel(option) !== null) {
                                                            return (_jsx(SelectItem, { value: option, children: transformLabel(option) }, option));
                                                        }
                                                        else
                                                            return;
                                                    }) })] }), _jsx(DatePickerWithRange, { dateRange: dateRange, setDateRange: setDateRange })] })), showDownloadButton && (_jsx(Button, { className: "rounded-full absolute top-4 right-4 hover:scale-105 transition-transform duration-300 ease-in-out transform", variant: "outline", children: _jsxs("div", { className: "flex gap-2 items-center ", children: [_jsx(MdDownload, { size: "20px" }), " ", _jsx(TextSmall, { children: "Report" })] }) }))] })), _jsx(Separator, { className: "bg-[#EAEAEA]" }), _jsxs("div", { className: " max-h-[65vh] overflow-scroll w-full", children: [_jsxs(Table, { className: "w-full h-fit relative", children: [_jsxs(TableHeader, { className: "sticky w-full top-0 z-0 bg-white p-2", children: [table.getHeaderGroups().map((headerGroup) => (_jsx(TableRow, { className: "border-[#F1F1F1]", children: headerGroup.headers.map((header) => {
                                                    return (_jsx(TableHead, { className: "p-2", children: header.isPlaceholder
                                                            ? null
                                                            : flexRender(header.column.columnDef.header, header.getContext()) }, header.id));
                                                }) }, headerGroup.id))), _jsx(TableRow, { className: "border-[#F1F1F1]", children: table.getAllColumns().map((column) => (_jsx(TableCell, {}, column.id))) })] }), !data ? (_jsx(Flex, { className: "h-[45dvh] w-[800%] justify-center items-center", children: _jsx(TextMedium, { children: "No Data Found..." }) })) : (_jsx(TableBody, { className: "w-full h-full", children: !isDataLoading ? (
                                        //ts-expect-error
                                        table.getRowModel().rows.map((row, index) => {
                                            return (_jsx(TableRow, { className: cn('border-[#F1F1F1]', selectedRowId === row.id ? 'bg-[#F3F5FD] hover:bg-[#F3F5FD]' : ''), "data-state": row.getIsSelected() && 'selected', onClick: () => {
                                                    setSelectedRowData(row.original);
                                                    setSelectedRowId(row.id);
                                                }, children: row.getVisibleCells().map((cell) => (_jsx(TableCell, { className: cn('d-table-cell py-4', cell.column.id === 'claim_id' ? 'cursor-pointer' : ''), onClick: addItemToTablist
                                                        ? () => {
                                                            if (cell.column.id === 'claim_id') {
                                                                const imeiCell = row
                                                                    .getVisibleCells()
                                                                    .find((c) => c.column.id === 'imei_no');
                                                                addItemToTablist({
                                                                    label: cell.getValue(),
                                                                    value: cell.getValue(),
                                                                    imei_number: imeiCell ? imeiCell.getValue() : undefined,
                                                                });
                                                            }
                                                        }
                                                        : undefined, children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }, row.id));
                                        })) : (_jsx(_Fragment, {})
                                        // <TextLarge>Loading... </TextLarge>
                                        ) }))] }), isDataLoading && (_jsx("div", { className: "", children: _jsx(Spinner, { size: "md", className: "mt-[28vh] ml-[30vw]" }) }))] }), !isDataLoading && showPagination && (_jsxs("div", { className: "mt-auto mr-2 p-2 bottom-0 flex justify-between space-x-2 w-[100%] border-t-gray-200", children: [_jsx("div", { className: "flex items-center gap-2 ", children: _jsx(Pagination, { className: "cursor-pointer", children: _jsxs(PaginationContent, { children: [_jsx(PaginationItem, { children: _jsxs(Button, { onClick: () => {
                                                        table.previousPage();
                                                    }, className: cn(' rounded p-1 text-gray-400 bg-gray-100 w-auto ', table.getState().pagination.pageIndex === 0
                                                        ? 'pointer-events-none opacity-50'
                                                        : undefined), disabled: !table.getCanPreviousPage(), children: [' ', _jsx(ChevronLeftIcon, { className: "size-4", "aria-hidden": "true" })] }) }), _jsx("div", { className: "w-fit max-w-[310px] flex overflow-hidden gap-1", children: getPageNumbers().map((page, index) => {
                                                    return (_jsx("span", { className: "flex items-center gap-2 overflow ", children: _jsx(PaginationItem, { className: cn(' text-[#7E84A3]  rounded-md hover:scale-110 hover:transition-transform hover:duration-400', page === table.getState().pagination.pageIndex
                                                                ? 'bg-[#E6E6E6]'
                                                                : 'bg-white'), children: _jsx(PaginationLink, { onClick: () => {
                                                                    if (page !== '...') {
                                                                        //@ts-expect-error
                                                                        table.setPageIndex(page);
                                                                    }
                                                                    else {
                                                                        table.setPageIndex(Math.ceil(
                                                                        //@ts-expect-error
                                                                        (getPageNumbers()[index - 1] + getPageNumbers()[index + 1]) /
                                                                            2));
                                                                    }
                                                                }, children: page === '...' ? '...' : page + 1 }) }) }, page));
                                                }) }), _jsx(PaginationItem, { children: _jsx(Button, { onClick: () => {
                                                        table.nextPage();
                                                    }, className: cn(' rounded p-1 text-gray-400 bg-gray-100 w-auto', table.getState().pagination.pageIndex ===
                                                        Math.ceil(table.getRowCount() / Number(table.getState().pagination.pageSize)) -
                                                            1
                                                        ? 'pointer-events-none opacity-50'
                                                        : undefined), children: _jsx(ChevronRightIcon, {}) }) })] }) }) }), _jsxs("div", { className: "w-fit flex items-center space-x-2", children: [_jsxs(TextSmall, { className: "flex items-center gap-1 text-sm", children: ["Showing", ' ', _jsx(TextSmall, { className: "font-bold", children: table.getRowModel().rows.length.toLocaleString() }), ' ', "of", ' ', _jsx(TextSmall, { className: "font-bold", children: table.getRowCount().toLocaleString() }), ' ', "Items"] }), _jsx(Separator, { orientation: "vertical" }), _jsx(TextSmall, { className: "text-sm mr-2", children: "Items per page: " }), _jsxs(Select, { onValueChange: (value) => {
                                            table.setPageSize(Number(value));
                                        }, children: [_jsx(SelectTrigger, { className: "w-[100px]", children: _jsx(SelectValue, { placeholder: table.getState().pagination.pageSize }) }), _jsx(SelectContent, { children: [10, 20, 30, 40, 50].map((pageSize) => (
                                                //@ts-expect-error
                                                _jsx(SelectItem, { value: pageSize, children: pageSize }, pageSize))) })] })] })] }))] }), isSideSheet && (_jsx("div", { className: "w-[25%] h-full overflow-scroll", children: _jsx(SideSheet, { isLoading: isDataLoading, data: selectedRowData }) }))] }));
}
//# sourceMappingURL=index.js.map