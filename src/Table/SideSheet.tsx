import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { H4, TextSmall } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const SideSheet = ({
  data,
  isLoading,
}: {
  data?: any;
  isLoading?: boolean;
}) => {
  return (
    <div className={(cn("h-full "), data ? "" : "grayscale")}>
      {isLoading && (
        <div className="ml-4 mt-8 h-[75dvh] flex flex-col justify-between">
          <div className="flex justify-start gap-24">
            <Skeleton className="h-[2dvh] w-[20%]" />
            <Skeleton className="h-[2dvh] w-[20%]" />
          </div>

          <div className="flex flex-col gap-2 pt-8">
            <Skeleton className="h-6 w-[150px]" />
            <Skeleton className="h-4 w-72" />
            <Skeleton className="h-4 w-72" />
            <Skeleton className="h-4 w-40" />
          </div>
          <div className="flex flex-col gap-2 pt-8">
            <Skeleton className="h-6 w-[150px]" />
            <Skeleton className="h-4 w-60" />
            <Skeleton className="h-4 w-84" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="flex flex-col gap-2 py-8 ">
            <Skeleton className="h-6 w-[150px]" />
            <Skeleton className="h-4 w-72" />
            <Skeleton className="h-4 w-72" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-[12dvh] w-[100%]" />
        </div>
      )}
      {!isLoading && (
        <div
          className={cn("md:bg-[#F3F5FD] flex flex-col relative h-[74dvh] ")}
        >
          <div className="flex justify-between p-4 items-center relative top-1">
            <H4 className="text-[#297FFF]">Summary</H4>
            <div
              className={cn(
                "font-bold flex items-center gap-2 absolute right-16",
                data?.status === 1
                  ? "text-green-500"
                  : data?.status === 4
                  ? "text-yellow-500"
                  : ""
              )}
            >
              <FaCircle size="8px" />
              <TextSmall className="inline">
                {data?.status === 4 ? "Pending" : "Active" ?? "Pending"}
              </TextSmall>
            </div>
          </div>
          <Separator className="mt-[1vh] w-full" />
          <div className="p-4 flex flex-col gap-2 ">
            <TextSmall className="inline font-bold text-sm ">
              Contact Information
            </TextSmall>
            <TextSmall className="inline  text-[10px] text-[#7E7E7E]">
              Name:{" "}
              <TextSmall className="inline text-black text-xs">
                {data?.customer?.name}
              </TextSmall>
            </TextSmall>
            <TextSmall className="inline text-[10px] text-[#7E7E7E]">
              Phone Number:{" "}
              <TextSmall className="inline text-black text-xs">
                {data?.customer?.phone}
              </TextSmall>
            </TextSmall>
            <TextSmall className="inline  text-[10px] text-[#7E7E7E]">
              Email ID:{" "}
              <TextSmall className="inline text-black text-xs">
                {" "}
                {data?.customer?.email ?? "karan@samsung.com"}
              </TextSmall>
            </TextSmall>
          </div>
          <Separator />
          <div className="p-4 flex flex-col gap-2">
            <TextSmall className="inline font-bold text-sm color-[#7E7E7E]">
              Plan Details
            </TextSmall>
            <TextSmall className="inline  text-[10px] text-[#7E7E7E]">
              Plan Name:{" "}
              <TextSmall className="inline text-black text-xs">
                {data?.display_plan_name}
              </TextSmall>
            </TextSmall>
            <TextSmall className="inline text-[10px] text-[#7E7E7E]">
              Plan Serial Number:{" "}
              <TextSmall className="inline text-black text-xs">
                {(data && data?.id) ?? ""}
              </TextSmall>
            </TextSmall>
            <TextSmall className="inline text-[10px] text-[#7E7E7E]">
              Warranty Start Date:{" "}
              <TextSmall className="inline text-black text-xs">
                {data?.warranty_start_date ?? "N/A"}
              </TextSmall>
            </TextSmall>
            <TextSmall className="inline text-[10px] text-[#7E7E7E]">
              Warranty End Date:{" "}
              <TextSmall className="inline text-black text-xs">
                {data?.warranty_end_date ?? "N/A"}
              </TextSmall>
            </TextSmall>
            <TextSmall className="inline  text-[10px] text-[#297FFF] font-bold">
              Plan MRP:{" "}
              <TextSmall className="inline">
                {" "}
                {data?.kitprice?.customer_price ?? 1999}
              </TextSmall>
            </TextSmall>
            <TextSmall className="inline  text-[10px] text-[#297FFF] font-bold">
              Retailer Landing Cost:{" "}
              <TextSmall className="inline">
                {" "}
                {data?.kitprice?.retailer_price ?? 1099}
              </TextSmall>
            </TextSmall>
          </div>
          <Separator />
          <div className="p-4 flex flex-col gap-2">
            <TextSmall className="inline font-bold text-sm ">
              Product Details
            </TextSmall>
            <TextSmall className="inline  text-[10px] text-[#7E7E7E]">
              IMEI Number:{" "}
              <TextSmall className="inline text-black text-xs">
                {data?.items[0]?.imeinumber}
              </TextSmall>
            </TextSmall>
            <TextSmall className="inline text-[10px] text-[#7E7E7E]">
              Model:{" "}
              <TextSmall className="inline text-black text-xs">
                {data?.items[0]?.model}
              </TextSmall>
            </TextSmall>
            <TextSmall className="inline  text-[10px] text-[#7E7E7E]">
              Product Purchase Date:{" "}
              <TextSmall className="inline text-black text-xs">
                {data?.items[0].purchasedate
                  ? format(new Date(data?.items[0].purchasedate), "dd-MM-yyyy")
                  : ""}
              </TextSmall>
            </TextSmall>
            <TextSmall className="inline  text-[10px] text-[#7E7E7E]">
              Product Price:{" "}
              <TextSmall className="inline text-black text-xs">
                {data?.items[0]?.price ?? "0"}
              </TextSmall>
            </TextSmall>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideSheet;
