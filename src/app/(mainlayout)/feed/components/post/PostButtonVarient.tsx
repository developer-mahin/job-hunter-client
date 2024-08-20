import { assets } from "@/assets";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useState } from "react";
import ImageUploadModalContent from "./ImageUploadModalContent";
import ReactCustomModal from "@/app/components/Shared/ReactModal";

const PostButtonVariant = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <Button onClick={() => setIsModalOpen(!isModalOpen)} variant="light">
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

      <ReactCustomModal
        modalIsOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        modalTitle="Media upload modal"
      >
        <ImageUploadModalContent setIsModalOpen={setIsModalOpen} />
      </ReactCustomModal>
    </>
  );
};

export default PostButtonVariant;
