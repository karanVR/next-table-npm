import { ColumnDef } from '@tanstack/react-table';
export type SamsungColumns = {
    sno?: number;
    name?: string;
    contact?: string;
    imei?: string;
    account_balance?: number;
    purchase_date?: string;
    status?: number | any;
    plan_type?: string;
    product?: string;
};
export declare const columns: ColumnDef<SamsungColumns>[];
export default columns;
