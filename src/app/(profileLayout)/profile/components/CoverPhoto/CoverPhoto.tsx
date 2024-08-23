"use state";

import ReactCustomModal from "@/app/components/Shared/ReactModal";
import { TUser } from "@/types";
import PhotoViewer from "@/utils/PhotoViewer";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { ImPencil } from "react-icons/im";
import UpdateCoverPhotoModalContent from "./UpdateCoverPhotoModalContent";

type TProps = {
  userData: TUser;
};

const CoverPhoto = ({ userData }: TProps) => {
  // const { userData } = useUserInfo();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="relative">
        <PhotoViewer
          src={
            userData?.coverPhoto
              ? userData?.coverPhoto
              : "https://marketplace.canva.com/EAFIddqdjTk/2/0/1600w/canva-black-minimalist-motivation-quote-linkedin-banner-1PLNOKlL1HU.jpg"
          }
          className="h-60  rounded-t-xl"
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
        <UpdateCoverPhotoModalContent
          userData={userData}
          setIsModalOpen={setModalIsOpen}
        />
      </ReactCustomModal>
    </>
  );
};

export default CoverPhoto;
