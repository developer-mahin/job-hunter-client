"use client";

import PostCard from "@/app/(homelayout)/feed/components/post/PostCard";
import Spinners from "@/app/components/Shared/Spinners";
import { useGetMyPostsQuery } from "@/redux/api/Features/Post/postApi";
import { TPost } from "@/types";

const AllMyPostsPage = () => {
  const { data: postData, isLoading } = useGetMyPostsQuery({});

  if (isLoading) {
    return <Spinners />;
  }

  return (
    <div className="w-[800px] ms-auto">
      <div className="">
        {postData?.map((data: TPost, i: number) => (
          <PostCard key={i} post={data} />
        ))}
      </div>
    </div>
  );
};

export default AllMyPostsPage;
