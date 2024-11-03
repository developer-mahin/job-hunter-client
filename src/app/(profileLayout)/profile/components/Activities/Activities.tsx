"use client";

import { TPost } from "@/types";
import ActivitiesPostCard from "./ActivitiesPostCard";
import Spinners from "@/app/components/Shared/Spinners";
import { useGetMyPostsQuery } from "@/redux/api/Features/Post/postApi";
import { Button } from "@nextui-org/button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Activities = () => {
  const { data, isLoading } = useGetMyPostsQuery({});

  if (isLoading) {
    return <Spinners />;
  }

  const myPosts = data?.data;

  return (
    <div className="shadow border rounded-xl mt-3 p-4">
      <p className="py-2 font-semibold text-xl">Activities</p>

      {myPosts?.slice(0, 3)?.map((post: TPost) => (
        <ActivitiesPostCard key={post._id} post={post} />
      ))}

      <div className="flex items-center">
        <Button className="font-medium" fullWidth>
          <Link href="/all_my_posts" className="flex items-center gap-x-2">
            See More <FaArrowRight className="text-xl" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Activities;
