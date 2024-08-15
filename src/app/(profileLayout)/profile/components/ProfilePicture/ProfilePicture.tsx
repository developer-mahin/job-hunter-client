"use client";

import ReactCustomModal from "@/app/components/Shared/ReactModal";
import useUserInfo from "@/hook/User";
import Image from "next/image";
import { useState } from "react";
import UpdateProfilePictureModalContent from "./UpdateProfilePictureModalContent";

const ProfilePicture = () => {
  const { userData } = useUserInfo();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="" onClick={() => setIsModalOpen(!isModalOpen)}>
        <Image
          className="rounded-full object-cover size-44 cursor-pointer"
          alt=""
          src={userData?.photo!!}
          width={500}
          height={100}
        />
      </div>
      <ReactCustomModal
        modalIsOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        modalTitle="Update your profile picture"
      >
        <UpdateProfilePictureModalContent />
      </ReactCustomModal>
    </>
  );
};

export default ProfilePicture;
