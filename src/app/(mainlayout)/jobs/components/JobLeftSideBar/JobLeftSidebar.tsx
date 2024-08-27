"use client";

import Spinners from "@/app/components/Shared/Spinners";
import { useGetAllJobQuery } from "@/redux/api/Features/Job/jobApi";
import { TJob } from "@/types";
import Image from "next/image";
import { useState } from "react";

const JobLeftSidebar = () => {
  const [jobId, setJobId] = useState<string>("");
  const [singleJob, setSingleJob] = useState<TJob>();
  const { data: allJobs, isLoading } = useGetAllJobQuery({});

  if (isLoading) {
    return <Spinners />;
  }

  console.log(singleJob)

  return (
    <div className="border rounded-xl  bg-gray-100 bg-opacity-70 shadow-lg h-[88vh] overflow-y-scroll">
      {allJobs?.map((item: TJob, i: number) => (
        <div
          key={i}
          className={
            item?._id === jobId
              ? "flex gap-3 cursor-pointer px-3 py-4 bg-gray-200 border-l-3 border-gray-700"
              : "flex gap-3 cursor-pointer px-3 py-4"
          }
          onClick={() => {
            setSingleJob(item);
            setJobId(item._id);
          }}
        >
          <div>
            <Image
              src={item.companyLogo}
              alt=""
              width={500}
              height={200}
              className="size-20"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg font-semibold text-[#0a66c2] hover:underline">
              {item.jobTitle}
            </p>
            <a href={item.website} target="_blank" className="hover:underline">
              {item.website}
            </a>
            <p>
              {item.location} ({item.workPlaceType})
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobLeftSidebar;
