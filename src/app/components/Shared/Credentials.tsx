"use client";

import { Button } from "@nextui-org/button";
import { useState } from "react";
import ReactCustomModal from "./ReactModal";

const Credentials = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div>
      <Button
        className="font-medium w-full"
        fullWidth
        onClick={() => setIsModalOpen(true)}
      >
        Show Dummy Credential
      </Button>
      <ReactCustomModal
        modalIsOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        modalTitle="Login Credential"
      >
        <div className="lg:w-[400px]">
          <p>Email: wipad52531@eixdeal.com</p>
          <p>Password: Pa$$w0rd!</p>
          <p>Email: vicew79748@kwalah.com</p>
          <p>Password: Pa$$w0rd!</p>
        </div>
      </ReactCustomModal>
    </div>
  );
};

export default Credentials;
