import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn, transformLabel } from '@/lib/utils'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
  HeaderGroup,
  Cell,
  Row,
  Column,
} from '@tanstack/react-table'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { MdDownload } from 'react-icons/md'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import SideSheet from './SideSheet'
import Spinner from './Spinner'
import { TextLarge, TextMedium, TextSmall } from '@/components/ui/typography'
import { Flex } from '@/components/ui/style-elements'
import { add } from 'date-fns'
import { DatePickerWithRange } from './DateRangePicker'

export interface IPagination {
  pageIndex: number
  pageSize: number
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  isBorder?: boolean
  data: TData[]
  totalCount: number | undefined
  isDataLoading: boolean
  showFilter: boolean
  pagination: IPagination
  setPagination: React.Dispatch<React.SetStateAction<IPagination>>
  filterField: string
  setFilterField: React.Dispatch<React.SetStateAction<string>>
  filterInput: string | number
  setFilterinput: (filter: string | number) => void
  showDownloadButton: boolean
  isSideSheet?: boolean
  showPagination?: boolean
  filterFields?: any // provide your filters type here
  tableHeight?: string
  onIndividualFilterFieldChange?: (field: string, value: string | number) => void
  addItemToTablist?: (element: any) => void
  dateRange?: string | any
  setDateRange?: React.Dispatch<React.SetStateAction<string>> | any
}

export function DataTable<TData, TValue>({
  columns,
  isBorder,
  data,
  totalCount,
  isDataLoading,
  showFilter,
  pagination,
  setPagination,
  filterField,
  setFilterField,
  filterInput,
  setFilterinput,
  showDownloadButton,
  isSideSheet,
  showPagination,
  filterFields,
  tableHeight = '75vh',
  onIndividualFilterFieldChange,
  addItemToTablist,
  dateRange,
  setDateRange,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [selectedRowId, setSelectedRowId] = useState<string>('')
  const initialRowRef = useRef<any>()
  const [selectedRowData, setSelectedRowData] = useState<TData>()

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
  })

  const dateRangeProps = {
    ...(dateRange !== undefined && { value: dateRange }),
    ...(setDateRange !== undefined && {
      onValueChange: (value: string) => setDateRange(value),
    }),
  }

  const getPageNumbers = () => {
    const pageNumbers = []
    const halfPageLimit = Math.floor(5 / 2)
    const totalPages = Math.ceil(table.getRowCount() / Number(table.getState().pagination.pageSize))
    const currentPage = table.getState().pagination.pageIndex

    if (totalPages <= 5) {
      for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      pageNumbers.push(0)

      let startPage = Math.max(currentPage - halfPageLimit, 1)
      let endPage = Math.min(currentPage + halfPageLimit, totalPages - 2)

      if (currentPage <= halfPageLimit) {
        startPage = 1
        endPage = 5 - 2
      }

      if (currentPage >= totalPages - halfPageLimit) {
        startPage = totalPages - 5 + 1
        endPage = totalPages - 2
      }
      if (startPage > 1) {
        pageNumbers.push('...')
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
      }
      if (endPage < totalPages - 2) {
        pageNumbers.push('...')
      }
      pageNumbers.push(totalPages - 1)
    }
    if (pageNumbers.length < 6) {
      pageNumbers.filter((p) => p !== '...')
    }
    return pageNumbers
  }

  let columnOptions: string[] = []
  columnOptions = columns.map((column) => {
    //@ts-expect-error
    return column.accessorKey
  })

  const handleFilter = (value: string) => {
    setFilterField(value)
  }

  useEffect(() => {
    if (data.length) {
      setSelectedRowData(table.getRowModel().rows[0].original)
      setSelectedRowId(table.getRowModel().rows[0]?.id)
    }
  }, [data])

  return (
    <div
      style={{
        height: tableHeight,
      }}
      className={cn(`rounded-lg relative z-0 flex w-full h-full `, isBorder ? 'border' : '')}
    >
      <div className={cn('flex flex-col h-full', isSideSheet ? 'w-[75%]' : 'w-[100%]')}>
        {(showFilter || showDownloadButton) && (
          <div className="flex items-left p-4 space-x-4 relative w-full">
            {showFilter && (
              <>
                <Input
                  className="width-[20%] max-w-[20%]"
                  placeholder={filterField ? `Filter by ${filterField}` : 'Select Filter Field'}
                  value={filterInput}
                  disabled={!filterField}
                  onChange={(event) => {
                    setPagination((p) => ({
                      pageIndex: 0,
                      pageSize: pagination.pageSize,
                    }))
                    setFilterinput(event.target.value)
                    // table
                    //   .getColumn(filterField)
                    //   ?.setFilterValue(event.target.value);
                  }}
                />
                <Select
                  //@ts-expect-error
                  className="absolute"
                  onValueChange={(value: string) => handleFilter(value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Filter Field" />
                  </SelectTrigger>
                  <SelectContent className="z-[100]">
                    {columnOptions &&
                      columnOptions.map((option) => {
                        if (transformLabel(option) !== null) {
                          return (
                            <SelectItem key={option} value={option}>
                              {transformLabel(option)}
                            </SelectItem>
                          )
                        } else return
                      })}
                  </SelectContent>
                </Select>
                {/* <Select
                  {...dateRangeProps}
                  //@ts-expect-error
                  className="absolute z-[100]"
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Date Range" />
                  </SelectTrigger>
                  <SelectContent className="z-[100]">
                    <SelectItem value="lw">Last Week</SelectItem>
                    <SelectItem value="lm">Last Month</SelectItem>
                    <SelectItem value="ly">Last Year</SelectItem>
                  </SelectContent>
                </Select> */}
                <DatePickerWithRange dateRange={dateRange} setDateRange={setDateRange} />
              </>
            )}
            {showDownloadButton && (
              <Button
                className="rounded-full absolute top-4 right-4 hover:scale-105 transition-transform duration-300 ease-in-out transform"
                variant="outline"
              >
                <div className="flex gap-2 items-center ">
                  <MdDownload size="20px" /> <TextSmall>Report</TextSmall>
                </div>
              </Button>
            )}
          </div>
        )}
        <Separator className="bg-[#EAEAEA]" />
        <div className=" max-h-[65vh] overflow-scroll w-full">
          <Table className="w-full h-fit relative">
            <TableHeader className="sticky w-full top-0 z-0 bg-white p-2">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="border-[#F1F1F1]">
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="p-2">
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}

              <TableRow className="border-[#F1F1F1]">
                {table.getAllColumns().map((column: any) => (
                  <TableCell key={column.id}>
                    {/* {column.columnDef.enableColumnFilter &&
                    onIndividualFilterFieldChange &&
                    filterFields ? (
                      <Filter
                        column={column}
                        filterFields={filterFields}
                        onFieldChange={onIndividualFilterFieldChange}
                      />
                    ) : null} */}
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>
            {!data ? (
              <Flex className="h-[45dvh] w-[800%] justify-center items-center">
                <TextMedium>No Data Found...</TextMedium>
              </Flex>
            ) : (
              <TableBody className="w-full h-full">
                {!isDataLoading ? (
                  //ts-expect-error
                  table.getRowModel().rows.map((row: any, index: number) => {
                    return (
                      <TableRow
                        className={cn(
                          'border-[#F1F1F1]',
                          selectedRowId === row.id ? 'bg-[#F3F5FD] hover:bg-[#F3F5FD]' : '',
                        )}
                        key={row.id}
                        data-state={row.getIsSelected() && 'selected'}
                        onClick={() => {
                          setSelectedRowData(row.original)
                          setSelectedRowId(row.id)
                        }}
                      >
                        {row.getVisibleCells().map((cell: any) => (
                          <TableCell
                            key={cell.id}
                            className={cn(
                              'd-table-cell py-4',
                              cell.column.id === 'claim_id' ? 'cursor-pointer' : '',
                            )}
                            onClick={
                              addItemToTablist
                                ? () => {
                                    if (cell.column.id === 'claim_id') {
                                      const imeiCell = row
                                        .getVisibleCells()
                                        .find((c: any) => c.column.id === 'imei_no')
                                      addItemToTablist({
                                        label: cell.getValue(),
                                        value: cell.getValue(),
                                        imei_number: imeiCell ? imeiCell.getValue() : undefined,
                                      })
                                    }
                                  }
                                : undefined
                            }
                          >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                        ))}
                      </TableRow>
                    )
                  })
                ) : (
                  <></>
                  // <TextLarge>Loading... </TextLarge>
                )}
              </TableBody>
            )}
          </Table>
          {isDataLoading && (
            <div className="">
              <Spinner size="md" className="mt-[28vh] ml-[30vw]" />
            </div>
          )}
        </div>
        {!isDataLoading && showPagination && (
          <div className="mt-auto mr-2 p-2 bottom-0 flex justify-between space-x-2 w-[100%] border-t-gray-200">
            <div className="flex items-center gap-2 ">
              <Pagination className="cursor-pointer">
                <PaginationContent>
                  <PaginationItem>
                    <Button
                      onClick={() => {
                        table.previousPage()
                      }}
                      className={cn(
                        ' rounded p-1 text-gray-400 bg-gray-100 w-auto ',
                        table.getState().pagination.pageIndex === 0
                          ? 'pointer-events-none opacity-50'
                          : undefined,
                      )}
                      disabled={!table.getCanPreviousPage()}
                    >
                      {' '}
                      <ChevronLeftIcon className="size-4" aria-hidden="true" />
                    </Button>
                  </PaginationItem>
                  <div className="w-fit max-w-[310px] flex overflow-hidden gap-1">
                    {getPageNumbers().map((page, index) => {
                      return (
                        <span key={page} className="flex items-center gap-2 overflow ">
                          <PaginationItem
                            className={cn(
                              ' text-[#7E84A3]  rounded-md hover:scale-110 hover:transition-transform hover:duration-400',
                              page === table.getState().pagination.pageIndex
                                ? 'bg-[#E6E6E6]'
                                : 'bg-white',
                            )}
                          >
                            <PaginationLink
                              onClick={() => {
                                if (page !== '...') {
                                  //@ts-expect-error

                                  table.setPageIndex(page)
                                } else {
                                  table.setPageIndex(
                                    Math.ceil(
                                      //@ts-expect-error
                                      (getPageNumbers()[index - 1] + getPageNumbers()[index + 1]) /
                                        2,
                                    ),
                                  )
                                }
                              }}
                            >
                              {/* @ts-expect-error */}
                              {page === '...' ? '...' : page + 1}
                            </PaginationLink>
                          </PaginationItem>
                        </span>
                      )
                    })}
                  </div>
                  <PaginationItem>
                    <Button
                      onClick={() => {
                        table.nextPage()
                      }}
                      className={cn(
                        ' rounded p-1 text-gray-400 bg-gray-100 w-auto',
                        table.getState().pagination.pageIndex ===
                          Math.ceil(
                            table.getRowCount() / Number(table.getState().pagination.pageSize),
                          ) -
                            1
                          ? 'pointer-events-none opacity-50'
                          : undefined,
                      )}
                    >
                      <ChevronRightIcon />
                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            <div className="w-fit flex items-center space-x-2">
              <TextSmall className="flex items-center gap-1 text-sm">
                Showing{' '}
                <TextSmall className="font-bold">
                  {table.getRowModel().rows.length.toLocaleString()}
                </TextSmall>{' '}
                of{' '}
                <TextSmall className="font-bold">{table.getRowCount().toLocaleString()}</TextSmall>{' '}
                Items
              </TextSmall>
              <Separator orientation="vertical" />
              <TextSmall className="text-sm mr-2">Items per page: </TextSmall>
              <Select
                onValueChange={(value) => {
                  table.setPageSize(Number(value))
                }}
              >
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder={table.getState().pagination.pageSize} />
                </SelectTrigger>
                <SelectContent>
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    //@ts-expect-error
                    <SelectItem key={pageSize} value={pageSize}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </div>
      {isSideSheet && (
        <div className="w-[25%] h-full overflow-scroll">
          <SideSheet isLoading={isDataLoading} data={selectedRowData} />
        </div>
      )}
    </div>
  )
}
