import { ColumnDef } from '@tanstack/react-table';
export interface IPagination {
    pageIndex: number;
    pageSize: number;
}
export interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    isBorder?: boolean;
    data: TData[];
    totalCount: number | undefined;
    isDataLoading: boolean;
    showFilter: boolean;
    pagination: IPagination;
    setPagination: React.Dispatch<React.SetStateAction<IPagination>>;
    filterField: string;
    setFilterField: React.Dispatch<React.SetStateAction<string>>;
    filterInput: string | number;
    setFilterinput: (filter: string | number) => void;
    showDownloadButton: boolean;
    isSideSheet?: boolean;
    showPagination?: boolean;
    filterFields?: any;
    tableHeight?: string;
    onIndividualFilterFieldChange?: (field: string, value: string | number) => void;
    addItemToTablist?: (element: any) => void;
    dateRange?: string | any;
    setDateRange?: React.Dispatch<React.SetStateAction<string>> | any;
}
export declare function DataTable<TData, TValue>({ columns, isBorder, data, totalCount, isDataLoading, showFilter, pagination, setPagination, filterField, setFilterField, filterInput, setFilterinput, showDownloadButton, isSideSheet, showPagination, filterFields, tableHeight, onIndividualFilterFieldChange, addItemToTablist, dateRange, setDateRange, }: DataTableProps<TData, TValue>): import("react/jsx-runtime").JSX.Element;
