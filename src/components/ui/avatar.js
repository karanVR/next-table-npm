'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '@/lib/utils';
const Avatar = React.forwardRef(({ className, ...props }, ref) => (_jsx(AvatarPrimitive.Root, { ref: ref, className: cn('relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full', className), ...props })));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (_jsx(AvatarPrimitive.Image, { ref: ref, className: cn('aspect-square h-full w-full', className), ...props })));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (_jsx(AvatarPrimitive.Fallback, { ref: ref, className: cn('flex h-full w-full items-center p-4 text-sm text-white justify-center rounded-full bg-neutral-400 dark:bg-neutral-800', className), ...props })));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
export { Avatar, AvatarImage, AvatarFallback };
//# sourceMappingURL=avatar.js.map