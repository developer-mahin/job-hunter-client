"use client";

import ReactCustomModal from "@/app/components/Shared/ReactModal";
import { TAuthUser, TJob } from "@/types";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { VscGitStashApply } from "react-icons/vsc";
import CreateJobApplyForm from "./CreateJobApplyForm";
import JD from "./JD";
import { useDispatch } from "react-redux";
import { setJobId } from "@/redux/api/Features/Job/jobSlice";
import { getUserFromLocalStorage } from "@/utils/localStorage";
import { authKey } from "@/constant/authKey";
import { FiCheckCircle } from "react-icons/fi";

type TProps = {
  job: TJob | null;
};

const AboutJobDescription = ({ job }: TProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const user = getUserFromLocalStorage(authKey.ACCESS_TOKEN) as TAuthUser;
  const findUserFromJob = job?.candidate.find(
    (item) => (item as TJob)?._id === user?.userId
  );

  return (
    <div className="">
      <div className="flex items-center gap-x-5 mt-4">
        {findUserFromJob ? (
          <p className="text-green-600 flex items-center gap-x-1">
            <FiCheckCircle /> Already applied this job
          </p>
        ) : (
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
        )}
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
