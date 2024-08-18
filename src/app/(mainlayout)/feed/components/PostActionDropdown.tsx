"use client";

import { useDeletePostMutation } from "@/redux/api/Features/Post/postApi";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { BsThreeDots } from "react-icons/bs";
import { toast } from "sonner";

type TProps = {
  postId: string;
};

const PostActionDropdown = ({ postId }: TProps) => {
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
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" size="sm">
          <BsThreeDots className="text-2xl" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions">
        <DropdownItem color="default" className="">
          Edit
        </DropdownItem>
        <DropdownItem
          onClick={() => handleDeletePost(postId)}
          color="danger"
          className="text-danger"
        >
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default PostActionDropdown;
