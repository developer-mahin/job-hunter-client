"use client";

import { assets } from "@/assets";
import {
  useFollowAndUnFollowMutation,
  useGetMyProfileQuery,
} from "@/redux/api/Features/user/userApi";
import { TPost } from "@/types";
import PhotoViewer from "@/utils/PhotoViewer";
import { Button } from "@nextui-org/button";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { toast } from "sonner";
import useSound from "use-sound";
import CommentSection from "../comment/CommentSection";
import PostActionButtons from "./PostActionButtons";
import PostActionDropdown from "./PostActionDropdown";

type TProps = {
  post: TPost;
};

const PostCard = ({ post }: TProps) => {
  const [seeAllDetails, setSeeAllDetails] = useState<boolean>(false);
  const changeState = seeAllDetails === true ? false : true;
  const { _id, author, postDetails, image, createdAt } = post;

  const { data } = useGetMyProfileQuery({});
  const [followAndUnFollow] = useFollowAndUnFollowMutation();

  const [like] = useSound(assets.audio.buttonSound);

  const userData = data?.data;
  // find following user for checking
  const findFollowing = userData?.following?.find(
    (user: any) => user?.user?._id === author?._id
  );

  const handleFollowAndUnFollowUser = async (id: string) => {
    try {
      await followAndUnFollow(id);
      like();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="mb-3 border rounded-xl bg-gray-100 bg-opacity-50 shadow">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href={
                userData?._id === author?._id
                  ? "/profile"
                  : `/user_profile/${author?._id}`
              }
            >
              <Image
                src={author?.photo}
                width={50}
                height={50}
                className="rounded-full object-cover"
                alt=""
              />
            </Link>
            <div>
              <Link
                href={
                  userData?._id === author?._id
                    ? "/profile"
                    : `/user_profile/${author?._id}`
                }
                className="block font-medium text-black no-underline hover:underline hover:text-blue-600"
              >
                {author?.name}
              </Link>
              <span className="text-sm">
                {moment(createdAt).startOf("hour").fromNow()}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {userData?._id !== author?._id && (
              <div>
                <Button
                  onClick={() => handleFollowAndUnFollowUser(author._id)}
                  className=""
                  variant="light"
                >
                  <AiOutlinePlus className="rounded cursor-pointer mr-1" />
                  <span className="underline cursor-pointer text-base">
                    {findFollowing ? "Unfollow" : "Follow"}
                  </span>
                </Button>
              </div>
            )}
            {userData?._id === author?._id && (
              <div className="flex items-center justify-between">
                <PostActionDropdown post={post} />
              </div>
            )}
          </div>
        </div>

        <div className="py-4">
          <>
            {changeState ? (
              <>
                {postDetails?.length > 150 ? (
                  <span className="text-base">
                    {postDetails && postDetails?.slice(0, 150) + "..."}
                  </span>
                ) : (
                  <span className="text-base">{postDetails}</span>
                )}
                {postDetails?.length > 150 && (
                  <span
                    onClick={() => setSeeAllDetails(!seeAllDetails)}
                    className="ml-1 underline cursor-pointer text-base font-medium"
                  >
                    See More
                  </span>
                )}
              </>
            ) : (
              <>
                <span className="text-base">{postDetails}</span>
                <span
                  onClick={() => setSeeAllDetails(!seeAllDetails)}
                  className="ml-1 underline cursor-pointer font-medium text-base"
                >
                  See Less
                </span>
              </>
            )}
          </>
        </div>
      </div>
      <div>{image && <PhotoViewer className="lg:h-[400px]" src={image} />}</div>

      {/* Post action button like comment  */}
      <div>
        <PostActionButtons post={post} />
      </div>

      {/* Comment section  */}
      <CommentSection post={post} />
    </div>
  );
};

export default PostCard;
