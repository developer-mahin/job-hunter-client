"use client";

import ReactCustomModal from "@/app/components/Shared/ReactModal";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { ImPencil } from "react-icons/im";
import AboutModalContent from "./AboutModalContent";
import { TUser } from "@/types";

type TProps = {
  userData: TUser;
};

const About = ({ userData }: TProps) => {
  const [isModalOpen, setModalIsOpen] = useState<boolean>(false);
  const [seeAllDetails, setSeeAllDetails] = useState<boolean>(true);
  const changeState = seeAllDetails === true ? false : true;

  return (
    <div className="shadow border rounded-xl mt-3 p-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-xl">About</p>
        <Button
          onClick={() => setModalIsOpen(!isModalOpen)}
          isIconOnly
          className="rounded-full"
        >
          <ImPencil className="text-xl" />
        </Button>
      </div>

      {userData?.about && (
        <div>
          {changeState ? (
            <div
              dangerouslySetInnerHTML={{
                __html: userData?.about,
              }}
            />
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: userData?.about?.slice(0, 350) + "...",
              }}
            />
          )}
          <p
            className=" font-semibold cursor-pointer"
            onClick={() => setSeeAllDetails(!seeAllDetails)}
          >
            {changeState ? "see less" : "see more..."}
          </p>
        </div>
      )}
      <ReactCustomModal
        modalIsOpen={isModalOpen}
        setIsOpen={setModalIsOpen}
        modalTitle="Edit About"
      >
        <AboutModalContent setModalIsOpen={setModalIsOpen} />
      </ReactCustomModal>
    </div>
  );
};

export default About;
