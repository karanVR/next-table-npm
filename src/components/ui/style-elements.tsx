import { cn } from "@/lib/utils";
import React from "react";

const Flex = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex", className)} {...props} />
));
Flex.displayName = "Flex";

const Box = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("block", className)} {...props} />
));
Box.displayName = "Box";

export { Flex, Box };
