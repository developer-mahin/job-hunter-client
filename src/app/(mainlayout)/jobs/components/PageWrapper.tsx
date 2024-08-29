"use client";

import { useGetAllJobQuery } from "@/redux/api/Features/Job/jobApi";
import JobLeftSidebar from "./JobLeftSideBar/JobLeftSidebar";
import JobMainPageContent from "./JobMainPageContent/JobMainPageContent";
import Spinners from "@/app/components/Shared/Spinners";
import { getFromLocalStorage } from "@/utils/localStorage";
import { authKey } from "@/constant/authKey";
import { decodedToken } from "@/utils/decodeToken";
import { TAuthUser } from "@/types";
import { Button } from "@nextui-org/button";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import ReactCustomModal from "@/app/components/Shared/ReactModal";
import CreateJobModalContent from "./CreateJobModalContent/CreateJobModalContent";

const PageWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data: allJobs, isLoading } = useGetAllJobQuery({});
  const token = getFromLocalStorage(authKey.ACCESS_TOKEN);

  let user;
  if (token) {
    user = decodedToken(token) as TAuthUser;
  }

  if (isLoading) {
    return <Spinners className="h-[90vh]" />;
  }

  return (
    <div className="my-3">
      {user?.role !== "user" && (
        <div>
          <Button onClick={() => setIsModalOpen(true)} className="font-medium">
            <FaEdit className="text-2xl" /> Post a free job
          </Button>

          <ReactCustomModal
            modalIsOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            modalTitle="Post a free job"
          >
            <CreateJobModalContent setIsModalOpen={setIsModalOpen} />
          </ReactCustomModal>
        </div>
      )}
      <div className="grid grid-cols-12 my-3 gap-x-5">
        <div className="col-span-5">
          <JobLeftSidebar allJobs={allJobs} />
        </div>
        <div className="col-span-7">
          <JobMainPageContent />
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
