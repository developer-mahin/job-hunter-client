"use client";

import ReactCustomModal from "@/app/components/Shared/ReactModal";
import { TUser } from "@/types";
import Image from "next/image";
import { useState } from "react";
import UpdateProfilePictureModalContent from "./UpdateProfilePictureModalContent";

type TProps = {
  userData: TUser;
};

const ProfilePicture = ({ userData }: TProps) => {
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
        <UpdateProfilePictureModalContent
          userData={userData}
          setIsModalOpen={setIsModalOpen}
        />
      </ReactCustomModal>
    </>
  );
};

export default ProfilePicture;
