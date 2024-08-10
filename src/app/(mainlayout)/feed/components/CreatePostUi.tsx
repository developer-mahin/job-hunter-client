"use client";

import JModal from "@/app/components/Modal/JModal";
import { assets } from "@/assets";
import useUserInfo from "@/hook/User";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import CreateModalContent from "./CreateModalContent";

const CreatePostUi = () => {
  const { userData } = useUserInfo();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="bg-gray-100 rounded-xl px-5 py-3">
      <div className="flex items-center gap-x-4">
        <div>
          <Image
            src={userData?.photo || ""}
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
            onPress={onOpen}
            className="rounded-full font-medium h-[52px]"
          >
            Start a post, try writing with AI
          </Button>
        </div>
        <JModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          modalTitle="Create your post"
          size="2xl"
          className="h-[600px] overflow-y-scroll custom-scrollbar"
        >
          <CreateModalContent />
        </JModal>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Button variant="light">
          <Image
            alt=""
            src={assets.svg.photo}
            width={100}
            height={100}
            className="size-5"
          />
          <p className="font-medium">Media</p>
        </Button>
        <Button variant="light">
          <Image
            alt=""
            src={assets.svg.article}
            width={100}
            height={100}
            className="size-5"
          />
          <p className="font-medium">Job</p>
        </Button>
        <Button variant="light">
          <Image
            alt=""
            src={assets.svg.job}
            width={100}
            height={100}
            className="size-5"
          />
          <p className="font-medium">Article</p>
        </Button>
      </div>
    </div>
  );
};

export default CreatePostUi;
