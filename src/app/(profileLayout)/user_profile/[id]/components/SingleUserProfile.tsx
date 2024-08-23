"use client";

import Spinners from "@/app/components/Shared/Spinners";
import { useGetSingleUserDataQuery } from "@/redux/api/Features/user/userApi";
import { useParams } from "next/navigation";
import ProfileInfo from "./ProfileInfo";
import PostInfo from "./PostInfo";
import AboutInfo from "./AboutInfo";
import Container from "@/app/components/Shared/Container";

const SingleUserData = () => {
  const { id } = useParams();
  const { data: singleUserData, isLoading } = useGetSingleUserDataQuery({ id });

  if (isLoading) {
    return <Spinners />;
  }

  return (
    <Container>
      <ProfileInfo singleUserData={singleUserData} />
      <AboutInfo singleUserData={singleUserData} />
      <PostInfo />
    </Container>
  );
};

export default SingleUserData;
