"use client";

import ReactCustomModal from "@/app/components/Shared/ReactModal";
import { TJob } from "@/types";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { toast } from "sonner";
import UpdateJobModalContent from "./UpdateJobModalContent";
import { useDeleteJobMutation } from "@/redux/api/Features/Job/jobApi";

type TProps = {
  job: TJob | null;
};

const JobActionButton = ({ job }: TProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [deleteJob] = useDeleteJobMutation();

  const handleDeleteJob = async (id: string) => {
    try {
      const res = await deleteJob(id);
      if (res.data) {
        toast.success("Job deleted successfully");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="light" size="sm">
            <BsThreeDots className="text-2xl" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions">
          <DropdownItem
            onClick={() => setIsModalOpen(!isModalOpen)}
            color="default"
            className=""
          >
            Edit
          </DropdownItem>
          <DropdownItem
            onClick={() => handleDeleteJob(job?._id as string)}
            color="danger"
            className="text-danger"
          >
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <ReactCustomModal
        modalIsOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        modalTitle="Update Job Description"
      >
        <UpdateJobModalContent job={job} setIsModalOpen={setIsModalOpen} />
      </ReactCustomModal>
    </>
  );
};

export default JobActionButton;
