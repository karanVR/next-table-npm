'use client'

import { TextSmall } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
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
      <TextSmall className="text-sm text-[#4C4D4E] font-SamsungSharpSans font-bold">S.No</TextSmall>
    ),
    cell: ({ row, index }: any) => {
      return <TextSmall className="font-bold">{row.index + 1}</TextSmall>
    },
  },
  {
    // accessorKey: "name",
    accessorKey: 'name',
    // @ts-expect-error
    header: <TextSmall className="text-[#4C4D4E] font-SamsungSharpSans font-bold">Name</TextSmall>,
    cell: ({ row }: any) => {
      // const name = row.getValue("name");
      return <TextSmall className="font-light">{row.original.customer.name}</TextSmall>
    },
  },
  {
    accessorKey: 'contact',
    // @ts-expect-error
    header: (
      <TextSmall className="text-[#4C4D4E] font-SamsungSharpSans font-bold">
        Contact Number
      </TextSmall>
    ),
    cell: ({ row }: any) => {
      const contact = row.getValue('contact')
      return <TextSmall className="font-light">{row.original.customer.phone}</TextSmall>
    },
  },
  {
    accessorKey: 'imei',
    // @ts-expect-error
    header: (
      <TextSmall className="text-[#4C4D4E] font-SamsungSharpSans font-bold">
        Serial/IMEI No.
      </TextSmall>
    ),
    cell: ({ row }: any) => {
      const imei = row.getValue('imei')
      return <TextSmall className="font-light">{row.original.items[0].imeinumber}</TextSmall>
    },
  },
  {
    accessorKey: 'purchase_date',
    // @ts-expect-error
    header: (
      <TextSmall className="text-[#4C4D4E] font-SamsungSharpSans font-bold">
        Date of Purchase
      </TextSmall>
    ),
    cell: ({ row }: any) => {
      const purchase_date = row.getValue('purchase_date')
      return (
        <TextSmall className="font-light">
          {' '}
          {format(row.original.sold_on, 'dd-MM-yyyy')}
          {/* {format(row.original.items[0].purchasedate, "dd-MM-yyyy HH:mm:ssXXX")} */}
        </TextSmall>
      )
    },
  },
  {
    accessorKey: 'status',
    // @ts-expect-error
    header: (
      <TextSmall className="text-[#4C4D4E] font-SamsungSharpSans font-bold">Status</TextSmall>
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
            <TextSmall>{status === 4 ? 'Pending' : status === 1 ? 'Active' : ''}</TextSmall>
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
        <TextSmall className="font-bold font-SamsungSharpSans ">Plan Type</TextSmall>
      </div>
    ),
    cell: ({ row }: any) => {
      const plan_type = row.getValue('plan_type')
      return <TextSmall className="font-light">{row.original.display_plan_name}</TextSmall>
    },
  },
  {
    accessorKey: 'product',
    // @ts-expect-error
    header: (
      <TextSmall className="text-[#4C4D4E] font-SamsungSharpSans font-bold">Product</TextSmall>
    ),
    cell: ({ row }: any) => {
      const product = row.getValue('product')
      return <TextSmall className="font-light">{row.original.items[0].model}</TextSmall>
    },
  },
]
