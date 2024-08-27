import { assets } from "@/assets";
import { useCreateLikeMutation } from "@/redux/api/Features/Like & Comment/likeAndCommentApi";
import { TPost } from "@/types";
import { Button } from "@nextui-org/button";
import { AiFillLike } from "react-icons/ai";
import { BiCommentDots, BiSend } from "react-icons/bi";
import { toast } from "sonner";
import useSound from "use-sound";

type TProps = {
  post: TPost;
};

const PostActionButtons = ({ post }: TProps) => {
  const [createLike] = useCreateLikeMutation();
  const [like] = useSound(assets.audio.buttonSound);

  const handleLike = async (postId: string) => {
    try {
      await createLike(postId);
      like();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-between px-3">
      <div className="mt-4">
        <p className="hover:underline cursor-pointer pl-3">
          {post?.likes?.length} Likes
        </p>
        <Button
          onClick={() => handleLike(post?._id)}
          className=""
          variant="light"
        >
          <AiFillLike className="text-xl" />
          <span className="text-base">Like</span>
        </Button>
      </div>

      <div>
        <p className="hover:underline cursor-pointer pl-3">
          {post?.comments && post?.comments?.length} Comments
        </p>
        <Button className="" variant="light">
          <BiCommentDots className="text-xl" />
          <span className="text-base">Comment</span>
        </Button>
      </div>
      <div>
        <p className="hover:underline cursor-pointer pl-3">0 reposts</p>
        <Button className="" variant="light">
          <BiSend className="text-xl" />
          <span className="text-base">Send</span>
        </Button>
      </div>
    </div>
  );
};

export default PostActionButtons;
