'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
const Checkbox = React.forwardRef(({ className, ...props }, ref) => (_jsx(CheckboxPrimitive.Root, { ref: ref, className: cn('peer h-4 w-4 shrink-0 rounded-sm border data-[state=checked]:border-none   border-neutral-900 shadow focus-visible:outline-none   disabled:cursor-not-allowed disabled:opacity-50  data-[state=checked]:text-neutral-50  dark:focus-visible:ring-neutral-300 dark:data-[state=checked]:bg-neutral-50 ', className), ...props, children: _jsx(CheckboxPrimitive.Indicator, { className: cn('flex items-center justify-center text-current'), children: _jsx(CheckIcon, { className: "h-4 w-4 bg-[#2CC915] r" }) }) })));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
export { Checkbox };
//# sourceMappingURL=checkbox.js.map