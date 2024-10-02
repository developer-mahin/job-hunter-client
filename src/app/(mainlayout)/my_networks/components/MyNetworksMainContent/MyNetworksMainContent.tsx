"use client";

import Spinners from "@/app/components/Shared/Spinners";
import { useGetAllUserDataQuery } from "@/redux/api/Features/user/userApi";
import { TUser } from "@/types";
import ContentCard from "./ContentCard";
import useUserInfo from "@/hook/User";
import {
  Button,
  Input,
  Pagination,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";

const MyNetworksMainContent = () => {
  const { userData } = useUserInfo();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(8);

  const { data: allUsers, isLoading } = useGetAllUserDataQuery([
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

  // filter data for remove my information from users array
  const filterData = allUsers?.filter(
    (item: TUser) => item._id !== userData?._id
  );

  return (
    <div className="bg-gray-50 border rounded-xl px-7 py-4">
      <div className="flex items-center justify-between gap-x-6">
        <h2 className="font-medium ">
          People you may know based on your recent activity
        </h2>
        <Input
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search User..."
          className="border rounded-xl flex-1 lg:w-72"
          name=""
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4">
        {filterData?.map((user: TUser, i: number) => (
          <ContentCard key={i} user={user} />
        ))}
      </div>

      <div className="mt-4 flex gap-x-6">
        <div className="flex flex-col gap-5 ">
          <Pagination
            total={filterData?.length}
            page={currentPage}
            onChange={setCurrentPage}
          />
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="flat"
              color="secondary"
              disabled={currentPage <= 1}
              onClick={() =>
                setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
              }
            >
              Previous
            </Button>
            <Button
              size="sm"
              variant="flat"
              color="secondary"
              disabled={currentPage >= filterData?.length}
              onClick={() =>
                setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))
              }
            >
              Next
            </Button>
          </div>
        </div>

        <div>
          <Select
            onChange={(e) => setLimit(Number(e.target.value))}
            size="md"
            fullWidth
            className="w-20"
          >
            <SelectItem key={5} value="5">
              5
            </SelectItem>
            <SelectItem key={10} value="10">
              10
            </SelectItem>
            <SelectItem key={15} value="15">
              15
            </SelectItem>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default MyNetworksMainContent;
