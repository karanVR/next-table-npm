'use client'

// import { text } from '@/components/ui/typography'
import { cn } from '../utils/utils'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { FaCircle } from 'react-icons/fa'
//TData
export type SamsungColumns = {
  sno?: number
  name?: string
  contact?: string
  imei?: string
  account_balance?: number
  purchase_date?: string
  status?: number | any
  plan_type?: string
  product?: string
}

export const columns: ColumnDef<SamsungColumns>[] = [
  {
    accessorKey: 'sno',
    // @ts-expect-error
    header: (
      <text className="text-sm text-[#4C4D4E] font-SamsungSharpSans font-bold">S.No</text>
    ),
    cell: ({ row, index }: any) => {
      return <text className="font-bold">{row.index + 1}</text>
    },
  },
  {
    // accessorKey: "name",
    accessorKey: 'name',
    // @ts-expect-error
    header: <text className="text-[#4C4D4E] font-SamsungSharpSans font-bold">Name</text>,
    cell: ({ row }: any) => {
      // const name = row.getValue("name");
      return <text className="font-light">{row.original.customer.name}</text>
    },
  },
  {
    accessorKey: 'contact',
    // @ts-expect-error
    header: (
      <text className="text-[#4C4D4E] font-SamsungSharpSans font-bold">
        Contact Number
      </text>
    ),
    cell: ({ row }: any) => {
      const contact = row.getValue('contact')
      return <text className="font-light">{row.original.customer.phone}</text>
    },
  },
  {
    accessorKey: 'imei',
    // @ts-expect-error
    header: (
      <text className="text-[#4C4D4E] font-SamsungSharpSans font-bold">
        Serial/IMEI No.
      </text>
    ),
    cell: ({ row }: any) => {
      const imei = row.getValue('imei')
      return <text className="font-light">{row.original.items[0].imeinumber}</text>
    },
  },
  {
    accessorKey: 'purchase_date',
    // @ts-expect-error
    header: (
      <text className="text-[#4C4D4E] font-SamsungSharpSans font-bold">
        Date of Purchase
      </text>
    ),
    cell: ({ row }: any) => {
      const purchase_date = row.getValue('purchase_date')
      return (
        <text className="font-light">
          {' '}
          {format(row.original.sold_on, 'dd-MM-yyyy')}
          {/* {format(row.original.items[0].purchasedate, "dd-MM-yyyy HH:mm:ssXXX")} */}
        </text>
      )
    },
  },
  {
    accessorKey: 'status',
    // @ts-expect-error
    header: (
      <text className="text-[#4C4D4E] font-SamsungSharpSans font-bold">Status</text>
    ),
    cell: ({ row }: any) => {
      const status: string | number = row.getValue('status')

      if (status) {
        return (
          <div
            className={cn(
              'font-bold flex items-center gap-2',
              status === 1 ? 'text-green-500' : status === 4 ? 'text-yellow-500' : '',
            )}
          >
            <FaCircle size="8px" />
            <text>{status === 4 ? 'Pending' : status === 1 ? 'Active' : ''}</text>
          </div>
        )
      }
    },
  },
  {
    accessorKey: 'plan_type',
    // @ts-expect-error
    header: (
      <div className="text-sm w-[7vw] text-[#4C4D4E] ">
        <text className="font-bold font-SamsungSharpSans ">Plan Type</text>
      </div>
    ),
    cell: ({ row }: any) => {
      const plan_type = row.getValue('plan_type')
      return <text className="font-light">{row.original.display_plan_name}</text>
    },
  },
  {
    accessorKey: 'product',
    // @ts-expect-error
    header: (
      <text className="text-[#4C4D4E] font-SamsungSharpSans font-bold">Product</text>
    ),
    cell: ({ row }: any) => {
      const product = row.getValue('product')
      return <text className="font-light">{row.original.items[0].model}</text>
    },
  },
]

export default columns
