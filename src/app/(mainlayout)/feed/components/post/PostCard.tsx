"use client";

import { TPost } from "@/types";
import { Button } from "@nextui-org/button";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { PhotoProvider, PhotoView } from "react-photo-view";
import PostActionButtons from "./PostActionButtons";
import { useState } from "react";
import useUserInfo from "@/hook/User";
import PostActionDropdown from "./PostActionDropdown";
import CommentSection from "../comment/CommentSection";

type TProps = {
  post: TPost;
};

const PostCard = ({ post }: TProps) => {
  const { userData } = useUserInfo();
  const [seeAllDetails, setSeeAllDetails] = useState<boolean>(false);
  const changeState = seeAllDetails === true ? false : true;
  const { _id, author, postDetails, image, createdAt } = post;

  return (
    <div className="mb-3 border rounded-xl bg-gray-100 bg-opacity-50 shadow">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href={`/user-details/${_id}`}>
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
                href={`/user-details/${_id}`}
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
                <Button className="" variant="light">
                  <AiOutlinePlus className="rounded cursor-pointer mr-1" />
                  <span className="underline cursor-pointer text-base">
                    Follow
                  </span>
                </Button>
              </div>
            )}
            {userData?._id === author._id && (
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
                {postDetails.length > 150 ? (
                  <span className="text-base">
                    {postDetails && postDetails?.slice(0, 150) + "..."}
                  </span>
                ) : (
                  <span className="text-base">{postDetails}</span>
                )}
                {postDetails.length > 150 && (
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
      <div>
        {image && (
          <PhotoProvider>
            <PhotoView src={image}>
              <Image
                className="w-full lg:h-[400px] cursor-pointer object-cover"
                src={image}
                alt=""
                width={6000}
                height={600}
              />
            </PhotoView>
          </PhotoProvider>
        )}
      </div>

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
