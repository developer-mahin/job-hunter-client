"use client";

import Spinners from "@/app/components/Shared/Spinners";
import { useGetAllJobQuery } from "@/redux/api/Features/Job/jobApi";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import JobLeftSidebar from "./JobLeftSideBar/JobLeftSidebar";
import AllFilters from "./JobMainPageContent/AllFilters";
import JobMainPageContent from "./JobMainPageContent/JobMainPageContent";

const PageWrapper = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const { data: allJobs, isLoading } = useGetAllJobQuery({});

  if (isLoading) {
    return <Spinners className="h-[90vh]" />;
  }

  return (
    <div className="my-3">
      <div className="flex items-center justify-between">
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
