"use client";

import Spinners from "@/app/components/Shared/Spinners";
import { useGetAllPostQuery } from "@/redux/api/Features/Post/postApi";
import { TPost } from "@/types";
import PostCard from "./PostCard";

const AllPost = () => {
  const { data: allPost, isLoading } = useGetAllPostQuery({});

  if (isLoading) {
    return <Spinners />;
  }

  return (
    <div className=" mt-3">
      {allPost?.data?.map((post: TPost) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default AllPost;
