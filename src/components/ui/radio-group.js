'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '@/lib/utils';
import { Box } from './style-elements';
const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
    return _jsx(RadioGroupPrimitive.Root, { className: cn('grid gap-2', className), ...props, ref: ref });
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef(({ className, radioIndicatorClassName, ...props }, ref) => {
    return (_jsx(RadioGroupPrimitive.Item, { ref: ref, className: cn('', className), ...props, children: _jsxs(Box, { className: "relative grid h-full place-items-center", children: [_jsx(RadioGroupPrimitive.Indicator, { className: cn('hidden'), children: _jsx(Box, { className: "p-[6px] bg-[#217AFF] rounded-full" }) }), props.children] }) }));
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
export { RadioGroup, RadioGroupItem };
//# sourceMappingURL=radio-group.js.map