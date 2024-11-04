"use client";

import { useGetMyProfileQuery } from "@/redux/api/Features/user/userApi";
import ShowFollowingAndFollowers from "./ShowFollowingAndFollowers";
import Spinners from "@/app/components/Shared/Spinners";
import { TUser } from "@/types";

const FollowingPageWrapper = () => {
  const { data, isLoading } = useGetMyProfileQuery({});

  if (isLoading) {
    return <Spinners className="h-[100vh]" />;
  }

  const followingData = data?.data?.following;

  return (
    <div className="border rounded-xl p-4 shadow" >
      {followingData?.map((item: any, i: number) => (
        <ShowFollowingAndFollowers key={i} user={item?.user} />
      ))}
    </div>
  );
};

export default FollowingPageWrapper;
