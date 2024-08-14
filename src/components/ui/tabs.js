// "use client";
// import * as React from "react";
// import * as TabsPrimitive from "@radix-ui/react-tabs";
// import { cn } from "@/lib/utils";
// const Tabs = TabsPrimitive.Root;
// const TabsList = React.forwardRef<
//   React.ElementRef<typeof TabsPrimitive.List>,
//   React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
// >(({ className, ...props }, ref) => (
//   <TabsPrimitive.List
//     ref={ref}
//     className={cn(
//       "inline-flex h-9 items-center justify-center rounded-lg bg-neutral-100 p-1 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400",
//       className
//     )}
//     {...props}
//   />
// ));
// TabsList.displayName = TabsPrimitive.List.displayName;
// const TabsTrigger = React.forwardRef<
//   React.ElementRef<typeof TabsPrimitive.Trigger>,
//   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
// >(({ className, ...props }, ref) => (
//   <TabsPrimitive.Trigger
//     ref={ref}
//     className={cn(
//       "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-neutral-950 data-[state=active]:shadow dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:data-[state=active]:bg-neutral-950 dark:data-[state=active]:text-neutral-50",
//       className
//     )}
//     {...props}
//   />
// ));
// TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
// const TabsContent = React.forwardRef<
//   React.ElementRef<typeof TabsPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
// >(({ className, ...props }, ref) => (
//   <TabsPrimitive.Content
//     ref={ref}
//     className={cn(
//       "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
//       className
//     )}
//     {...props}
//   />
// ));
// TabsContent.displayName = TabsPrimitive.Content.displayName;
// export { Tabs, TabsList, TabsTrigger, TabsContent };
// custom styled tab component for samsung use case
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => (_jsx(TabsPrimitive.List, { ref: ref, className: cn(' inline-flex w-full items-center justify-start  gap-0  border-border p-0 text-muted-foreground', className), ...props })));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (_jsx(TabsPrimitive.Trigger, { ref: ref, className: cn('mx-2 -mb-[2px] inline-flex items-center justify-start  whitespace-nowrap border-b-2 px-2  py-2   text-base font-medium  transition-all first-of-type:ml-0 disabled:pointer-events-none disabled:text-muted-foreground data-[state=active]:border-black data-[state=inactive]:border-white data-[state=active]:font-semibold data-[state=active]:text-foreground', className), ...props })));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => (_jsx(TabsPrimitive.Content, { ref: ref, className: cn('mt-2  ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', className), ...props })));
TabsContent.displayName = TabsPrimitive.Content.displayName;
export { Tabs, TabsList, TabsTrigger, TabsContent };
//# sourceMappingURL=tabs.js.map