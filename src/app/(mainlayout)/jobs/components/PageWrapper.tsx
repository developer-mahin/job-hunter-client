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
import { HiMenuAlt2 } from "react-icons/hi";
import AllFilters from "./JobMainPageContent/AllFilters";

const PageWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
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
      <div className="flex items-center justify-between">
        <div>
          {user?.role !== "user" && (
            <div>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="font-medium"
              >
                <FaEdit className="text-2xl" /> Post a free job
              </Button>

              <ReactCustomModal
                modalIsOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                modalTitle="Post a free job"
                className=""
              >
                <CreateJobModalContent setIsModalOpen={setIsModalOpen} />
              </ReactCustomModal>
            </div>
          )}
        </div>

        <Button
          isIconOnly
          className="lg:hidden block"
          size="md"
          color="default"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiMenuAlt2 className="size-8" />
        </Button>
        <div>
          <Button
            className=""
            size="md"
            color="default"
            onClick={() => setFilterIsOpen(!filterIsOpen)}
          >
            All Filters
          </Button>

          <AllFilters isOpen={filterIsOpen} setIsOpen={setFilterIsOpen} />
        </div>
      </div>

      <div className="grid grid-cols-12 my-3 lg:gap-x-5">
        <div className="lg:col-span-5 col-span-12">
          <JobLeftSidebar
            allJobs={allJobs}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
        <div className="lg:col-span-7 col-span-12">
          <JobMainPageContent />
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
