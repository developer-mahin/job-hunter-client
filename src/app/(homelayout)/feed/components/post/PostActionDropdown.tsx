"use client";

import ReactCustomModal from "@/app/components/Shared/ReactModal";
import { useDeletePostMutation } from "@/redux/api/Features/Post/postApi";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { toast } from "sonner";
import UpdatePostModalContent from "./UpdatePostModalContent";
import { TPost } from "@/types";

type TProps = {
  post: TPost;
};

const PostActionDropdown = ({ post }: TProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [deletePost] = useDeletePostMutation();

  const handleDeletePost = async (id: string) => {
    try {
      const res = await deletePost({ postId: id });
      if (res.data) {
        toast.success("Post deleted successfully");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="light" size="sm">
            <BsThreeDots className="text-2xl" />
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
            onClick={() => handleDeletePost(post?._id)}
            color="danger"
            className="text-danger"
          >
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <ReactCustomModal
        modalIsOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        modalTitle="Post update modal"
      >
        <UpdatePostModalContent post={post} setIsModalOpen={setIsModalOpen} />
      </ReactCustomModal>
    </>
  );
};

export default PostActionDropdown;
