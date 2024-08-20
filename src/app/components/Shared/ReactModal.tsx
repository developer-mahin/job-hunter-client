"use clint";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";
import React from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "15px",
    border: "1px solid #ddd",
    background: "#fff",
    boxShadow: "3px 1px 16px -6px #333",
    transform: "translate(-50%, -50%)",
  },
};

type TProps = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalTitle: string;
  children: React.ReactNode;
};

const ReactCustomModal = ({
  modalIsOpen,
  setIsOpen,
  modalTitle,
  children,
}: TProps) => {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-end">
          <Button
            isIconOnly
            className="rounded-full"
            color="danger"
            size="sm"
            onClick={closeModal}
          >
            <IoMdClose className="text-xl" />
          </Button>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{modalTitle}</h3>
          <Divider className="my-2" />
        </div>
        <div className="mx-4">{children}</div>
      </Modal>
    </div>
  );
};

export default ReactCustomModal;
