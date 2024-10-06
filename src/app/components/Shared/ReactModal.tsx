import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";
import React from "react";
import { HiX } from "react-icons/hi";

type TProps = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalTitle: string;
  children: React.ReactNode;
  className?: string;
};

const ReactCustomModal = ({
  modalIsOpen,
  setIsOpen,
  modalTitle,
  children,
  className,
}: TProps) => {
  return (
    <div>
      <div>
        {modalIsOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div
              className={cn(
                className,
                "bg-white rounded-xl shadow-lg lg:w-fit w-[95%] p-6 relative"
              )}
            >
              {/* Modal content */}
              <h2 className="text-2xl text-black font-semibold mb-4">
                {modalTitle}
              </h2>
              <Divider className="mb-3" />
              <div className="text-black">{children}</div>
              <Button
                onClick={() => setIsOpen(false)}
                isIconOnly
                size="sm"
                color="danger"
                className="absolute top-2 right-2 rounded-full"
              >
                <HiX className="size-5 cursor-pointer" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReactCustomModal;
