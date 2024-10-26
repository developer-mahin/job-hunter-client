import { cn } from "@/lib/utils";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { ReactNode } from "react";

type TJModalProps = {
  isOpen: boolean;
  onOpenChange: any;
  children?: ReactNode;
  modalTitle: string;
  size?:
    | "lg"
    | "xs"
    | "sm"
    | "md"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";
  className?: string;
};

const JModal = ({
  isOpen,
  onOpenChange,
  children,
  modalTitle,
  size,
  className,
}: TJModalProps) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size={size || "lg"}
        className={cn("", className)}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalTitle}
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default JModal;
