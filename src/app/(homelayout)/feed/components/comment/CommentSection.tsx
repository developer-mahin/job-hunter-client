import { Input } from "@/components/ui/input";
import { useCreateCommentMutation } from "@/redux/api/Features/Like & Comment/likeAndCommentApi";
import { TPost } from "@/types";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { AiOutlineCamera, AiOutlineGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { toast } from "sonner";
import CommentData from "./CommentData";

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
          <Button
            onClick={() => handleComment(post._id)}
            disabled={!commentBody}
            className=""
          >
            Comment
          </Button>
        </div>
      </div>

      <CommentData post={post} />
    </>
  );
};

export default CommentSection;
