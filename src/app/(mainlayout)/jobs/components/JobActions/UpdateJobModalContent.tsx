import { TJob } from "@/types";
import React from "react";

type TProps = {
  job: TJob | null;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdateJobModalContent = ({ setIsModalOpen }: TProps) => {
  return (
    <div>
      <h2>Welcome to the UpdateJobModalContent page</h2>
    </div>
  );
};

export default UpdateJobModalContent;
