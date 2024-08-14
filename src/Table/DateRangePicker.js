'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { format } from 'date-fns';
import { SlCalender as CalendarIcon } from 'react-icons/sl';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
export function DatePickerWithRange({ className, setDateRange, }) {
    const [date, setDate] = React.useState({
        from: undefined,
        to: undefined,
    });
    const [showCalender, setShowCalender] = React.useState(false);
    const handleDateSelect = (date) => {
        setDateRange({
            from_date: date.from,
            to_date: date.to,
        });
    };
    const today = new Date();
    return (_jsx("div", { className: cn('grid gap-2', className), children: _jsxs(Popover, { open: showCalender, onOpenChange: setShowCalender, children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { id: "date", variant: 'outline', className: cn('w-fit justify-start text-left font-normal', !date && 'text-muted-foreground'), children: [_jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }), date?.from ? (date.to ? (_jsxs(_Fragment, { children: [format(date.from, 'LLL dd, y'), " - ", format(date.to, 'LLL dd, y')] })) : (format(date.from, 'LLL dd, y'))) : (_jsx("span", { children: "Pick a date range" }))] }) }), _jsxs(PopoverContent, { className: "w-auto p-0", align: "start", children: [_jsx(Calendar
                        //@ts-expect-error
                        , { 
                            //@ts-expect-error
                            initialFocus: true, mode: "range", defaultMonth: date?.from, selected: date, onSelect: setDate, numberOfMonths: 2, disabled: (date) => date > today }), _jsx(Button, { className: "ml-[40%] mb-4", onClick: () => {
                                handleDateSelect(date);
                                setShowCalender(false);
                            }, children: "Set Range" })] })] }) }));
}
//# sourceMappingURL=DateRangePicker.js.map