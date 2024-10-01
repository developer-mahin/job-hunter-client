"use client";

import Spinners from "@/app/components/Shared/Spinners";
import {
  useGetAllUserDataQuery
} from "@/redux/api/Features/user/userApi";
import { TUser } from "@/types";
import ContentCard from "./ContentCard";

const MyNetworksMainContent = () => {
  const { data: allUsers, isLoading } = useGetAllUserDataQuery({});

  if (isLoading) {
    return <Spinners />;
  }


  return (
    <div className="bg-gray-50 border rounded-xl px-7 py-4">
      <h2 className="font-medium">People you may know based on your recent activity</h2>
      <div className="grid grid-cols-4 gap-4 mt-6">
        {allUsers.map((user: TUser, i: number) => (
          <ContentCard key={i} user={user}/>
        ))}
      </div>
    </div>
  );
};

export default MyNetworksMainContent;
