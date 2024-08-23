import { TComment, TPost } from "@/types";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import CommentActionDropdown from "./CommentActionDropdown";
import useUserInfo from "@/hook/User";
import Link from "next/link";

type TProps = {
  post: TPost;
};

const CommentData = ({ post }: TProps) => {
  const { userData } = useUserInfo();

  return (
    <div className="px-3">
      <div>
        {post?.comments?.slice(0, 3)?.map((data: TComment, index: number) => (
          <div key={index} className="flex items-center">
            <div className="my-3 flex gap-3 flex-1">
              <div>
                <Link
                  href={
                    userData?._id === data?.user?._id
                      ? "/profile"
                      : `/user_profile/${data?.user?._id}`
                  }
                >
                  <Image
                    className="object-cover rounded-full"
                    src={data?.user?.photo}
                    width={45}
                    height={45}
                    alt=""
                  />
                </Link>
              </div>
              <div className="p-3 bg-secondary bg-opacity-10 rounded w-full">
                <h6 className="m-0 font-semibold text-sm hover:underline">
                  <Link
                    href={
                      userData?._id === data?.user?._id
                        ? "/profile"
                        : `/user_profile/${data?.user?._id}`
                    }
                  >
                    {data?.user?.name}
                  </Link>
                </h6>
                <p className="m-0 pt-1 text-sm">{data.commentBody}</p>
              </div>
            </div>
            {userData?._id === data?.user?._id && (
              <div>
                <CommentActionDropdown data={data} postId={post._id} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pb-3">
        {post?.comments && post?.comments?.length > 2 ? (
          <Button variant="light" size="sm" className="font-medium">
            Load More Comments
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CommentData;
