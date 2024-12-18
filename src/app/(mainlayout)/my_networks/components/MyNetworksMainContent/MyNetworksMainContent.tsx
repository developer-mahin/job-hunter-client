"use client";

import PaginationSoluation from "@/app/components/Shared/PaginationSoluation";
import Spinners from "@/app/components/Shared/Spinners";
import useUserInfo from "@/hook/User";
import { useGetAllUserDataQuery } from "@/redux/api/Features/user/userApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { TUser } from "@/types";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import ContentCard from "./ContentCard";
import {
  setCurrentPage,
  setLimit,
  setSearchTerm,
} from "@/redux/api/Features/Job/jobSlice";

const MyNetworksMainContent = () => {
  const { userData } = useUserInfo();
  const { currentPage, limit, searchTerm } = useAppSelector(
    (state) => state.job
  );
  const dispatch = useAppDispatch();

  const handleSetLimit = (newLimit: number) => {
    dispatch(setLimit(newLimit));
  };

  const handleSetCurrentPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  const { data, isLoading } = useGetAllUserDataQuery([
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

  if (isLoading) {
    return <Spinners />;
  }

  const allUsers = data.data;

  // filter data for remove my information from users array
  const filterData = allUsers?.filter(
    (item: TUser) => item._id !== userData?._id
  );

  return (
    <div className="bg-gray-50 border rounded-xl px-7 py-4">
      <div className="flex lg:flex-row flex-col items-center justify-between gap-x-6">
        <h2 className="font-medium ">
          People you may know based on your recent activity
        </h2>
        <Input
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          placeholder="Search User..."
          className="border rounded-xl flex-1 lg:w-72"
          name=""
        />
        {/* <FilterSidebar /> */}
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {filterData?.map((user: TUser, i: number) => (
          <ContentCard key={i} user={user} />
        ))}
      </div>

      <div>
        <PaginationSoluation
          totalPage={data?.meta?.totalPage}
          setLimit={handleSetLimit}
          setCurrentPage={handleSetCurrentPage}
        />
      </div>
    </div>
  );
};

export default MyNetworksMainContent;
