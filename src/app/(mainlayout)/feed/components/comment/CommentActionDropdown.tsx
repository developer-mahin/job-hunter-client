import ReactCustomModal from "@/app/components/Shared/ReactModal";
import { useDeleteCommentMutation } from "@/redux/api/Features/Like & Comment/likeAndCommentApi";
import { TComment, TPost } from "@/types";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { toast } from "sonner";
import UpdateCommentModelContent from "./UpdateCommentModelContent";

type TProps = {
  data: TComment;
  postId: string;
};

const CommentActionDropdown = ({ data, postId }: TProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [deleteComment] = useDeleteCommentMutation();

  const handleDeleteComment = async (id: string) => {
    const payload = {
      postId,
      commentId: {
        commentId: id,
      },
    };

    try {
      const res = await deleteComment(payload);
      if (res.data.acknowledged) {
        toast.success("comment deleted successfully");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="light" isIconOnly size="sm">
            <HiDotsVertical className="text-xl" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions">
          <DropdownItem
            onClick={() => setIsModalOpen(!isModalOpen)}
            color="default"
            className=""
          >
            Edit
          </DropdownItem>
          <DropdownItem
            onClick={() => handleDeleteComment(data?._id)}
            color="danger"
            className="text-danger"
          >
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <ReactCustomModal
        setIsOpen={setIsModalOpen}
        modalIsOpen={isModalOpen}
        modalTitle="Update comment modal"
      >
        <UpdateCommentModelContent data={data} postId={postId as string} setIsModalOpen={setIsModalOpen}/>
      </ReactCustomModal>
    </>
  );
};

export default CommentActionDropdown;
