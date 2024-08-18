import { useUpdateCommentMutation } from "@/redux/api/Features/Like & Comment/likeAndCommentApi";
import { TComment } from "@/types";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import React, { useState } from "react";
import { toast } from "sonner";

type TProps = {
  data: TComment;
  postId: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdateCommentModelContent = ({
  data,
  postId,
  setIsModalOpen,
}: TProps) => {
  const [commentContent, setCommentContent] = useState<string>("");

  const [updateComment] = useUpdateCommentMutation();

  const handleUpdateComment = async (id: string) => {
    const commentData = {
      postId: postId,
      commentInfo: {
        commentBody: commentContent,
        commentId: id,
      },
    };

    try {
      const res = await updateComment(commentData);
      if (res.data.acknowledged) {
        toast.success("comment updated successfully");
        setIsModalOpen(false);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="py-2 lg:w-[500px] w-full space-y-3">
      <Textarea
        label="Description"
        onChange={(e) => setCommentContent(e.target.value)}
        placeholder="Write your post description"
        fullWidth
      />
      <Button
        onClick={() => handleUpdateComment(data?._id)}
        className="font-medium"
        variant="ghost"
      >
        Update
      </Button>
    </div>
  );
};

export default UpdateCommentModelContent;
