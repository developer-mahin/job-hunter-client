"use state";

import ReactCustomModal from "@/app/components/Shared/ReactModal";
import useUserInfo from "@/hook/User";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useState } from "react";
import { ImPencil } from "react-icons/im";
import UpdateCoverPhotoModalContent from "./UpdateCoverPhotoModalContent";

const CoverPhoto = () => {
  const { userData } = useUserInfo();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="relative">
        <Image
          src={
            userData?.coverPhoto
              ? userData?.coverPhoto
              : "https://marketplace.canva.com/EAFIddqdjTk/2/0/1600w/canva-black-minimalist-motivation-quote-linkedin-banner-1PLNOKlL1HU.jpg"
          }
          className="w-full h-60 object-cover cursor-pointer rounded-t"
          alt=""
          width={500}
          height={100}
        />
        <Button
          onClick={() => setModalIsOpen(!modalIsOpen)}
          isIconOnly
          className="rounded-full absolute top-4 right-4"
        >
          <ImPencil className="text-xl" />
        </Button>
      </div>
      <ReactCustomModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        modalTitle="Update your cover photo"
      >
        <UpdateCoverPhotoModalContent />
      </ReactCustomModal>
    </>
  );
};

export default CoverPhoto;
