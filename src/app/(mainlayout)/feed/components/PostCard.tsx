import { TPost } from "@/types";
import { Button } from "@nextui-org/button";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { PhotoProvider, PhotoView } from "react-photo-view";
import CommentSection from "./CommentSection";
import PostActionButtons from "./PostActionButtons";
import PostActionDropdown from "./PostActionDropdown";

type TProps = {
  post: TPost;
};

const PostCard = ({ post }: TProps) => {
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

        <div>
          <div
            dangerouslySetInnerHTML={{ __html: postDetails.slice(3, 120) }}
          />
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
          {/* </div> */}
        </div>
      </div>
      <div>
        {image && (
          <PhotoProvider>
            <PhotoView src={image}>
              <Image
                className="w-full h-auto cursor-pointer"
                src={image}
                alt=""
                width={6000}
                height={600}
              />
            </PhotoView>
          </PhotoProvider>
        )}
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
        {/* Post action button like comment  */}
        <PostActionButtons post={post} />
      </div>

      {/* Comment section  */}
      <CommentSection post={post} />
    </div>
  );
};

export default PostCard;
