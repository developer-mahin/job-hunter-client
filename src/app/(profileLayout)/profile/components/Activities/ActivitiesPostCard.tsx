import { TPost } from "@/types";
import { Divider } from "@nextui-org/react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

type TProps = {
  post: TPost;
};

const ActivitiesPostCard = ({ post }: TProps) => {
  const { image, postDetails, author, _id, createdAt } = post;

  return (
    <div className="py-2">
      <Link href={`/user-post-details/${_id}`}>
        <div>
          <div>
            <p className="text-xs font-bold">{author.name}</p>
            <p className="text-xs font-medium">
              Posted on this {moment(createdAt).startOf("hour").fromNow()}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center ">
          <div className="hidden md:block">
            {image && (
              <Image
                src={image}
                className="object-cover w-[100px] rounded-xl"
                width={200}
                height={130}
                alt=""
              />
            )}
          </div>
          <div className="block md:hidden">
            {image && (
              <Image
                src={image}
                className="object-cover w-[100px] rounded-xl"
                width={200}
                height={130}
                alt=""
              />
            )}
          </div>
          <div className="flex-1">
            {postDetails?.length > 200 ? (
              <span>{postDetails?.slice(0, 250) + "..."}</span>
            ) : (
              <span>{postDetails}</span>
            )}
            {postDetails?.length > 200 && (
              <span className="underline cursor-pointer text-base font-medium">
                See More
              </span>
            )}
          </div>
        </div>
        <div className="pt-4" />
        <Divider />
      </Link>
    </div>
  );
};

export default ActivitiesPostCard;
