import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/button";
import React from "react";
import { HiX } from "react-icons/hi";

type TFilterSidebarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  directionRight?: boolean;
};

const FilterSidebar: React.FC<TFilterSidebarProps> = ({
  isOpen,
  setIsOpen,
  children,
  directionRight,
}) => {
  return (
    <div>
      <div
        className={cn(
          `fixed inset-y-0 ${directionRight ? "right-0" : "left-0"} transform ${
            isOpen
              ? directionRight
                ? "-translate-x-0"
                : "translate-x-0"
              : directionRight
              ? "translate-x-full"
              : "-translate-x-full"
          } transition-transform duration-300 ease-in-out w-80 bg-white shadow-lg z-50 md:hidden`
        )}
      >
        {/* Drawer content */}
        <div className="h-[90vh] overflow-y-scroll p-4 relative">
          <Button
            isIconOnly
            color="danger"
            size="sm"
            className="rounded-full absolute right-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiX className="size-8" />
          </Button>

          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
