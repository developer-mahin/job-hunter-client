"use client";

import ReactCustomModal from "@/app/components/Shared/ReactModal";
import { useGetMyProfileQuery } from "@/redux/api/Features/user/userApi";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import CreateModalContent from "./CreateModalContent";
import PostButtonVariant from "./PostButtonVarient";

const CreatePostUi = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data: userData } = useGetMyProfileQuery({});

  return (
    <>
      <div className="bg-gray-100 rounded-xl px-5 py-3">
        <div className="flex items-center gap-x-4">
          <div>
            <Image
              src={
                userData?.data?.photo ||
                "https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid"
              }
              width={500}
              height={200}
              className="size-16 rounded-full object-cover"
              alt="user image"
            />
          </div>
          <div className="flex-1">
            <Button
              variant="bordered"
              fullWidth
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="rounded-full font-medium h-[52px]"
            >
              Start a post, try writing with AI
            </Button>
          </div>
          <ReactCustomModal
            modalIsOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            modalTitle="Create your post"
          >
            <CreateModalContent setIsModalOpen={setIsModalOpen} />
          </ReactCustomModal>
        </div>

        <PostButtonVariant />
      </div>
    </>
  );
};

export default CreatePostUi;
