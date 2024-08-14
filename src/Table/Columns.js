'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TextSmall } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { FaCircle } from 'react-icons/fa';
export const columns = [
    {
        accessorKey: 'sno',
        // @ts-expect-error
        header: (_jsx(TextSmall, { className: "text-sm text-[#4C4D4E] font-SamsungSharpSans font-bold", children: "S.No" })),
        cell: ({ row, index }) => {
            return _jsx(TextSmall, { className: "font-bold", children: row.index + 1 });
        },
    },
    {
        // accessorKey: "name",
        accessorKey: 'name',
        // @ts-expect-error
        header: _jsx(TextSmall, { className: "text-[#4C4D4E] font-SamsungSharpSans font-bold", children: "Name" }),
        cell: ({ row }) => {
            // const name = row.getValue("name");
            return _jsx(TextSmall, { className: "font-light", children: row.original.customer.name });
        },
    },
    {
        accessorKey: 'contact',
        // @ts-expect-error
        header: (_jsx(TextSmall, { className: "text-[#4C4D4E] font-SamsungSharpSans font-bold", children: "Contact Number" })),
        cell: ({ row }) => {
            const contact = row.getValue('contact');
            return _jsx(TextSmall, { className: "font-light", children: row.original.customer.phone });
        },
    },
    {
        accessorKey: 'imei',
        // @ts-expect-error
        header: (_jsx(TextSmall, { className: "text-[#4C4D4E] font-SamsungSharpSans font-bold", children: "Serial/IMEI No." })),
        cell: ({ row }) => {
            const imei = row.getValue('imei');
            return _jsx(TextSmall, { className: "font-light", children: row.original.items[0].imeinumber });
        },
    },
    {
        accessorKey: 'purchase_date',
        // @ts-expect-error
        header: (_jsx(TextSmall, { className: "text-[#4C4D4E] font-SamsungSharpSans font-bold", children: "Date of Purchase" })),
        cell: ({ row }) => {
            const purchase_date = row.getValue('purchase_date');
            return (_jsxs(TextSmall, { className: "font-light", children: [' ', format(row.original.sold_on, 'dd-MM-yyyy')] }));
        },
    },
    {
        accessorKey: 'status',
        // @ts-expect-error
        header: (_jsx(TextSmall, { className: "text-[#4C4D4E] font-SamsungSharpSans font-bold", children: "Status" })),
        cell: ({ row }) => {
            const status = row.getValue('status');
            if (status) {
                return (_jsxs("div", { className: cn('font-bold flex items-center gap-2', status === 1 ? 'text-green-500' : status === 4 ? 'text-yellow-500' : ''), children: [_jsx(FaCircle, { size: "8px" }), _jsx(TextSmall, { children: status === 4 ? 'Pending' : status === 1 ? 'Active' : '' })] }));
            }
        },
    },
    {
        accessorKey: 'plan_type',
        // @ts-expect-error
        header: (_jsx("div", { className: "text-sm w-[7vw] text-[#4C4D4E] ", children: _jsx(TextSmall, { className: "font-bold font-SamsungSharpSans ", children: "Plan Type" }) })),
        cell: ({ row }) => {
            const plan_type = row.getValue('plan_type');
            return _jsx(TextSmall, { className: "font-light", children: row.original.display_plan_name });
        },
    },
    {
        accessorKey: 'product',
        // @ts-expect-error
        header: (_jsx(TextSmall, { className: "text-[#4C4D4E] font-SamsungSharpSans font-bold", children: "Product" })),
        cell: ({ row }) => {
            const product = row.getValue('product');
            return _jsx(TextSmall, { className: "font-light", children: row.original.items[0].model });
        },
    },
];
//# sourceMappingURL=Columns.js.map