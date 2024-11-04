"use client";

import Spinners from "@/app/components/Shared/Spinners";
import { useGetMyProfileQuery } from "@/redux/api/Features/user/userApi";
import ShowFollowingAndFollowers from "../../../following/[id]/components/ShowFollowingAndFollowers";

const FollowersPageWrapper = () => {
  const { data, isLoading } = useGetMyProfileQuery({});

  if (isLoading) {
    return <Spinners className="h-[100vh]" />;
  }

  const followersData = data?.data?.followers;

  return (
    <div className="border rounded-xl p-4 shadow">
      {followersData.length < 1 ? (
        <p>NO Followers Found!!</p>
      ) : (
        <>
          {followersData?.map((item: any, i: number) => (
            <ShowFollowingAndFollowers key={i} user={item?.user} />
          ))}
        </>
      )}
    </div>
  );
};

export default FollowersPageWrapper;
