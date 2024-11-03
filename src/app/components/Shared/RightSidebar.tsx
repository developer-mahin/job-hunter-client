"use client";

import { setSearchTerm } from "@/redux/api/Features/Job/jobSlice";
import { useGetAllUserDataQuery } from "@/redux/api/Features/user/userApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { TUser } from "@/types";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { AiTwotoneLike } from "react-icons/ai";
import { BiErrorCircle, BiRightArrowAlt } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import RightSidebarCard from "./RightSidebarCard";

const RightSidebar = () => {
  const { currentPage, limit, searchTerm } = useAppSelector(
    (state) => state.job
  );

  const dispatch = useAppDispatch();

  const { data } = useGetAllUserDataQuery([
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
  ]);

  const rightSideBarInfo = data?.data;

  return (
    <div className="">
      <div className="mb-3 border bg-gray-50 bg-opacity-15 p-3 rounded-t-xl">
        <form className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <GoLocation />
          </div>
          <Input
            type="text"
            name=""
            isRequired
            label="Search User"
            id=""
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            className="h-11 pl-10"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <GrClose />
          </div>
        </form>

        <div className="flex gap-1 mt-4">
          <BiErrorCircle className="text-gray-500 w-5 text-lg mt-1" />
          <p className="text-gray-500 text-sm">
            Your location will help us serve better and extend a personalized
            experience.
          </p>
        </div>

        <div className="flex items-center gap-1 my-5">
          <AiTwotoneLike className="text-lg text-gray-500" />
          <p className="uppercase m-0">Recommended</p>
        </div>

        <div className="bg-opacity-15 rounded-t-xl sticky top-0">
          {rightSideBarInfo?.slice(0, 4)?.map((info: TUser) => (
            <RightSidebarCard key={info._id} info={info}></RightSidebarCard>
          ))}
          <div className="flex items-center justify-center view-profile rounded">
            <Link href="my_networks" className="w-full">
              <Button fullWidth className="flex items-center gap-1">
                <span className="font-medium text-gray-500 text-base">
                  See All
                </span>
                <BiRightArrowAlt className="text-lg text-gray-500" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
