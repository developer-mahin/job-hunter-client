"use client";

import ReactCustomModal from "@/app/components/Shared/ReactModal";
import { TJob } from "@/types";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { VscGitStashApply } from "react-icons/vsc";
import CreateJobApplyForm from "./CreateJobApplyForm";
import JD from "./JD";
import { useDispatch } from "react-redux";
import { setJobId } from "@/redux/api/Features/Job/jobSlice";

type TProps = {
  job: TJob | null;
};

const AboutJobDescription = ({ job }: TProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="flex items-center gap-x-5 mt-4">
        <Button
          onClick={() => {
            dispatch(setJobId(job?._id));
            setIsModalOpen(true);
          }}
          className="font-medium rounded-full"
        >
          <VscGitStashApply className="text-2xl text-gray-700" />
          Apply
        </Button>
        <Button className="font-medium rounded-full" variant="bordered">
          Save
        </Button>
      </div>
      <JD description={job?.jobDescription} />

      <ReactCustomModal
        setIsOpen={setIsModalOpen}
        modalIsOpen={isModalOpen}
        modalTitle="Complete your job application"
      >
        <CreateJobApplyForm setIsModalOpen={setIsModalOpen} />
      </ReactCustomModal>
    </div>
  );
};

export default AboutJobDescription;
