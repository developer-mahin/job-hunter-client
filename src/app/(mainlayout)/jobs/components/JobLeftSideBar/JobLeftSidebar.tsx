"use client";

import { setJob } from "@/redux/api/Features/Job/jobSlice";
import { TJob } from "@/types";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import { useDispatch } from "react-redux";

type TProps = {
  allJobs: TJob[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const JobLeftSidebar = ({ allJobs, isOpen, setIsOpen }: TProps) => {
  const [jobId, setJobId] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (allJobs && allJobs.length > 0) {
      dispatch(setJob(allJobs[0]));
      setJobId(allJobs[0]._id);
    }
  }, [allJobs, dispatch]);

  return (
    <div>
      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-80 bg-white shadow-lg z-50 md:hidden`} // Hidden on md and above
      >
        {/* Drawer content */}
        <div className="border rounded-xl bg-gray-100 bg-opacity-70 shadow-lg h-[90vh] overflow-y-scroll p-4 relative">
          <Button
            isIconOnly
            color="danger"
            size="sm"
            className="rounded-full absolute right-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiX className="size-8" />
          </Button>

          <div className="pt-10">
            {allJobs?.map((item: TJob, i: number) => (
              <div
                key={i}
                className={
                  item?._id === jobId
                    ? "flex gap-3 cursor-pointer px-3 py-4 bg-gray-200 border-l-4 border-gray-700"
                    : "flex gap-3 cursor-pointer px-3 py-4"
                }
                onClick={() => {
                  dispatch(setJob(item));
                  setJobId(item._id);
                }}
              >
                <div>
                  <Image
                    src={
                      item?.companyLogo ||
                      "https://www.logodesign.net/logo/line-art-buildings-in-swoosh-1273ld.png?nwm=1&nws=1&industry=company&sf=&txt_keyword=All"
                    }
                    alt=""
                    width={50}
                    height={50}
                    className="lg:size-20 size-14"
                  />
                </div>
                <div className="flex-1">
                  <p className="lg:text-lg text-sm font-semibold text-[#0a66c2] hover:underline">
                    {item.jobTitle}
                  </p>
                  <a
                    href={item.website}
                    target="_blank"
                    className="hover:underline lg:text-base text-sm"
                  >
                    {item.website}
                  </a>
                  <p className="lg:text-base text-sm">
                    {item.location} ({item.workPlaceType})
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Version (Always visible) */}
      <div className="hidden md:block border rounded-xl bg-gray-100 bg-opacity-70 shadow-lg h-[90vh] overflow-y-scroll">
        {allJobs?.map((item: TJob, i: number) => (
          <div
            key={i}
            className={
              item?._id === jobId
                ? "flex gap-3 cursor-pointer px-3 py-4 bg-gray-200 border-l-4 border-gray-700"
                : "flex gap-3 cursor-pointer px-3 py-4"
            }
            onClick={() => {
              dispatch(setJob(item));
              setJobId(item._id);
            }}
          >
            <div>
              <Image
                src={
                  item?.companyLogo ||
                  "https://www.logodesign.net/logo/line-art-buildings-in-swoosh-1273ld.png?nwm=1&nws=1&industry=company&sf=&txt_keyword=All"
                }
                alt=""
                width={50}
                height={50}
                className="lg:size-20 size-14"
              />
            </div>
            <div className="flex-1">
              <p className="lg:text-lg text-sm font-semibold text-[#0a66c2] hover:underline">
                {item.jobTitle}
              </p>
              <a
                href={item.website}
                target="_blank"
                className="hover:underline lg:text-base text-sm"
              >
                {item.website}
              </a>
              <p className="lg:text-base text-sm">
                {item.location} ({item.workPlaceType})
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobLeftSidebar;
