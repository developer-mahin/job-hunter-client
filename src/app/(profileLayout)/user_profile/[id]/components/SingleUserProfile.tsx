"use client";

import Spinners from "@/app/components/Shared/Spinners";
import { useGetSingleUserDataQuery } from "@/redux/api/Features/user/userApi";
import { useParams } from "next/navigation";
import AboutInfo from "./AboutInfo";
import PostInfo from "./PostInfo";
import ProfileInfo from "./ProfileInfo";

const SingleUserData = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleUserDataQuery({ id });

  if (isLoading) {
    return <Spinners />;
  }

  const singleUserData = data?.data;

  return (
    <>
      <ProfileInfo singleUserData={singleUserData} />
      <AboutInfo singleUserData={singleUserData} />
      <PostInfo />
    </>
  );
};

export default SingleUserData;
