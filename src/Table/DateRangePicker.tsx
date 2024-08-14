'use client'

import * as React from 'react'
import { addDays, format } from 'date-fns'
import { SlCalender as CalendarIcon } from 'react-icons/sl'
import { DateRange } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function DatePickerWithRange({
  className,
  setDateRange,
}: {
  className?: string
  dateRange: any
  setDateRange: any
}) {
  const [date, setDate] = React.useState<DateRange>({
    from: undefined,
    to: undefined,
  })
  const [showCalender, setShowCalender] = React.useState<boolean>(false)

  const handleDateSelect = (date: DateRange) => {
    setDateRange({
      from_date: date.from,
      to_date: date.to,
    })
  }

  const today = new Date()
  return (
    <div className={cn('grid gap-2', className)}>
      <Popover open={showCalender} onOpenChange={setShowCalender}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'w-fit justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            //@ts-expect-error
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            disabled={(date) => date > today}
          />
          <Button
            className="ml-[40%] mb-4"
            onClick={() => {
              handleDateSelect(date)
              setShowCalender(false)
            }}
          >
            Set Range
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  )
}
