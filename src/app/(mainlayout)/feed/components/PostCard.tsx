import { TPost } from "@/types";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillLike,
  AiOutlineCamera,
  AiOutlineGif,
  AiOutlinePlus,
} from "react-icons/ai";
import { BiCommentDots, BiEditAlt, BiSend } from "react-icons/bi";
import { BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import { TbMessageReport } from "react-icons/tb";
import { PhotoProvider, PhotoView } from "react-photo-view";
import PostActionDropdown from "./PostActionDropdown";

type TProps = {
  post: TPost;
};

const PostCard = ({ post }: TProps) => {
  const {
    _id,
    author,
    postDetails,
    image,
    likes,
    comments,
    postCategory,
    createdAt,
  } = post;

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
              <span className="text-sm">{createdAt?.slice(0, 10)}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div>
              <Button className="btn">
                <AiOutlinePlus className="rounded cursor-pointer mr-1" />
                <span className="underline cursor-pointer text-base">
                  Follow
                </span>
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <PostActionDropdown />
            </div>
          </div>
        </div>
        <div className="mt-2">
          {/* {postRole === "education" && (
            <GiGraduateCap className="mr-1 font-medium" />
          )}
          {postRole === "job" && <CgWorkAlt className="mr-1 font-medium" />}
          {postRole === "article" && <BsPenFill className="mr-1 font-medium" />}
          <span className="capitalize font-medium">{postRole}</span> */}
        </div>
        <div>
          <p>
            {/* {postRole === "job" ? (
              <>
                {description?.length > 150 ? (
                  <>
                    <p className="text-base">
                      {description?.slice(0, 150) + "..."}
                    </p>
                  </>
                ) : (
                  <>{description}</>
                )}
              </>
            ) : (
              <>
                {changeState ? (
                  <>
                    {description.length > 150 ? (
                      <span className="text-base">
                        {description && description?.slice(0, 150) + "..."}
                      </span>
                    ) : (
                      <span className="text-base">{description}</span>
                    )}
                    {description.length > 150 && (
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
                    <span className="text-base">{description}</span>
                    <span
                      onClick={() => setSeeAllDetails(!seeAllDetails)}
                      className="ml-1 underline cursor-pointer font-medium text-base"
                    >
                      See Less
                    </span>
                  </>
                )}
              </>
            )} */}
          </p>
        </div>
      </div>
      <div>
        <PhotoProvider>
          <PhotoView src={author?.photo}>
            <Image
              className="w-full h-auto cursor-pointer"
              src={author?.photo}
              alt=""
              width={600}
              height={60}
            />
          </PhotoView>
        </PhotoProvider>
      </div>

      <div>
        <div className="px-3 flex items-center justify-between py-2">
          <div>
            {/* <span className="text-base">
              {!like?.length ? `0 Like` : sortingLike.length + " " + "Likes"}
            </span> */}
          </div>
          <div>
            {/* <span className="text-base">
              {comment?.length ? comment?.length : "0"} comments
            </span> */}
          </div>
        </div>
        <div className="flex items-center justify-between px-3">
          <Button className="" variant="light">
            <AiFillLike className="text-xl" />
            <span className="text-base">Like</span>
          </Button>

          <Button className="" variant="light">
            <BiCommentDots className="text-xl" />
            <span className="text-base">Comment</span>
          </Button>
          <Button className="" variant="light">
            <BiSend className="text-xl" />
            <span className="text-base">Send</span>
          </Button>
        </div>
      </div>

      <div className="py-3 px-3 flex items-center gap-2">
        <div className="flex items-center gap-3 w-full  mr-3">
          <div className="w-3/4">
            <Input
              placeholder="Write a comment"
              required
              className="rounded-full"
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Button className="w-8" size="sm" variant="light">
              <BsEmojiSmile className="text-xl cursor-pointer" />
            </Button>
            <Button className="w-8" size="sm" variant="light">
              <AiOutlineCamera className="text-xl cursor-pointer" />
            </Button>
            <Button className="w-8" size="sm" variant="light">
              <AiOutlineGif className="text-2xl cursor-pointer" />
            </Button>
          </div>
        </div>
        <div>
          <Button className="">Send</Button>
        </div>
      </div>

      <div className="px-3">
        {/* {comments?.map((data, index) => (
          <div key={index} className="my-3 flex gap-3">
            <div>
              <img
                className="object-cover rounded-full"
                src={data?.userPhoto}
                width={45}
                height={45}
                alt=""
              />
            </div>
            <div className="p-3 bg-secondary bg-opacity-10 rounded w-full">
              <h6 className="m-0">{data?.userName}</h6>
              <p className="m-0 pt-1 text-sm">{data?.comment}</p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default PostCard;
