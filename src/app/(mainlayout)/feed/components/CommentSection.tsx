import { Input } from "@/components/ui/input";
import { useCreateCommentMutation } from "@/redux/api/Features/Like & Comment/likeAndCommentApi";
import { TComment, TPost } from "@/types";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineCamera, AiOutlineGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { toast } from "sonner";

type TProps = {
  post: TPost;
};

const CommentSection = ({ post }: TProps) => {
  const [commentBody, setCommentBody] = useState<string>("");
  const [createComment] = useCreateCommentMutation();

  const handleComment = async (id: string) => {
    const commentData = {
      id,
      commentBody: {
        commentBody,
      },
    };

    try {
      const res = await createComment(commentData);
      if (res.data.acknowledged) {
        setCommentBody("");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="py-3 px-3 flex items-center gap-2">
        <div className="flex items-center gap-3 w-full  mr-3">
          <div className="w-3/4">
            <Input
              placeholder="Write a comment"
              required
              value={commentBody}
              onChange={(e) => setCommentBody(e.target.value)}
              className="rounded-full bg-white"
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Button isIconOnly variant="light">
              <BsEmojiSmile className="text-xl cursor-pointer" />
            </Button>
            <Button isIconOnly variant="light">
              <AiOutlineCamera className="text-xl cursor-pointer" />
            </Button>
            <Button isIconOnly variant="light">
              <AiOutlineGif className="text-2xl cursor-pointer" />
            </Button>
          </div>
        </div>
        <div>
          <Button onClick={() => handleComment(post._id)} className="">
            Comment
          </Button>
        </div>
      </div>

      <div className="px-3">
        {post?.comments?.slice(0, 3)?.map((data: TComment, index: number) => (
          <div key={index} className="my-3 flex gap-3">
            <div>
              <Image
                className="object-cover rounded-full"
                src={data?.user?.photo}
                width={45}
                height={45}
                alt=""
              />
            </div>
            <div className="p-3 bg-secondary bg-opacity-10 rounded w-full">
              <h6 className="m-0">{data?.user?.name}</h6>
              <p className="m-0 pt-1 text-sm">{data.commentBody}</p>
            </div>
          </div>
        ))}

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
    </>
  );
};

export default CommentSection;
