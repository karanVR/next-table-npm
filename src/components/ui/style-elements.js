import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import React from 'react';
const Flex = React.forwardRef(({ className, ...props }, ref) => _jsx("div", { ref: ref, className: cn('flex', className), ...props }));
Flex.displayName = 'Flex';
const Box = React.forwardRef(({ className, ...props }, ref) => _jsx("div", { ref: ref, className: cn('block', className), ...props }));
Box.displayName = 'Box';
export { Flex, Box };
//# sourceMappingURL=style-elements.js.map