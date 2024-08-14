"use client";

import Spinners from "@/app/components/Shared/Spinners";
import { useGetAllPostQuery } from "@/redux/api/Features/Post/postApi";
import PostCard from "./PostCard";
import { TPost } from "@/types";

const AllPost = () => {
  const { data: allPost, isLoading } = useGetAllPostQuery({});

  if (isLoading) {
    return <Spinners />;
  }

  return (
    <div className=" mt-3">
      {allPost?.map((post: TPost) => (
        <PostCard key={post._id} post={post}></PostCard>
      ))}
    </div>
  );
};

export default AllPost;
