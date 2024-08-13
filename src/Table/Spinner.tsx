import React from "react";
import { cn } from "@/lib/utils";

interface ISpinnerProps {
  className?: string;
  size?: string;
}

type Size = {
  [key: string]: string;
};

const Spinner = ({ className, size = "md", ...props }: ISpinnerProps) => {
  const sizes: Size = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-4",
    lg: "w-12 h-12 border-6",
  };

  return (
    <div
      className={cn(
        "inline-block border-current border-t-transparent rounded-full animate-spin text-[#297FFF]",
        sizes[size],
        className
      )}
      {...props}
    />
  );
};

export default Spinner;
