"use client";

import ActivitiesPostCard from "@/app/(profileLayout)/profile/components/Activities/ActivitiesPostCard";
import Spinners from "@/app/components/Shared/Spinners";
import { useGetUserPostQuery } from "@/redux/api/Features/Post/postApi";
import { TPost } from "@/types";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

const PostInfo = () => {
  const { id } = useParams();
  const { data: postData, isLoading } = useGetUserPostQuery({ id });

  if (isLoading) {
    return <Spinners />;
  }

  return (
    <div className="shadow border rounded-xl mt-3 p-4">
      <p className="py-2 font-semibold text-xl">Activities</p>

      {postData?.slice(0, 3)?.map((post: TPost) => (
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

export default PostInfo;
