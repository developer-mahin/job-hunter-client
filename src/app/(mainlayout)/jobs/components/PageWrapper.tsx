"use client";

import Spinners from "@/app/components/Shared/Spinners";
import { useGetAllJobQuery } from "@/redux/api/Features/Job/jobApi";
import { useAppSelector } from "@/redux/hook";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import JobLeftSidebar from "./JobLeftSideBar/JobLeftSidebar";
import AllFilters from "./JobMainPageContent/AllFilters";
import JobMainPageContent from "./JobMainPageContent/JobMainPageContent";

const PageWrapper = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);

  const {
    currentPage,
    limit,
    searchTerm,
    experienceLevel,
    location,
    industry,
    workPlaceType,
  } = useAppSelector((state) => state.job);

  const { data: allJobs, isLoading } = useGetAllJobQuery([
    {
      name: "limit",
      value: limit,
    },
    {
      name: "page",
      value: currentPage,
    },
    {
      name: "searchTerm",
      value: searchTerm,
    },
    experienceLevel.split("").length >= 1 && {
      name: "jobType",
      value: experienceLevel || "",
    },
    location.split("").length >= 1 && {
      name: "location",
      value: location,
    },
    industry.split("").length >= 1 && {
      name: "industry",
      value: industry,
    },
    workPlaceType.split("").length >= 1 && {
      name: "workPlaceType",
      value: workPlaceType,
    },
  ]);

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

          <AllFilters
            meta={allJobs?.meta}
            isOpen={filterIsOpen}
            setIsOpen={setFilterIsOpen}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 my-3 lg:gap-x-5">
        <div className="lg:col-span-5 col-span-12">
          <JobLeftSidebar
            allJobs={allJobs?.data}
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
