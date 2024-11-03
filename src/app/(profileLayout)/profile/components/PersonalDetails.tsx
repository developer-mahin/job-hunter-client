import ReactCustomModal from "@/app/components/Shared/ReactModal";
import { TUser } from "@/types";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { ImPencil } from "react-icons/im";
import ContactInfoModalContent from "./ProfileModalData/ContactInfoModalContent";
import FollowerAndFollowing from "./FollowerAndFollwing/FollowerAndFollowing";

type TProps = {
  userData: TUser;
};

const PersonalDetails = ({ userData }: TProps) => {
  const [contactInfoModalOpen, setContactInfoModalOpen] =
    useState<boolean>(false);

  return (
    <div>
      <div>
        <h3 className="font-bold text-2xl pb-1">{userData?.name}</h3>
        <div>
          <p className="text-gray-500">
            {userData?.headline || "Please update your profile"}
          </p>
        </div>
        <p className="text-gray-500">
          Talks about {userData?.info?.tag || "Please update your profile"}
        </p>

        <div className="flex gap-1">
          <p className="text-gray-500">
            {userData?.info?.city || "Please update your profile"}
          </p>
          {" ||"}
          <p className="text-gray-500">
            {userData?.info?.country
              ? userData?.info?.country
              : "Please update your profile"}
          </p>
        </div>
        <div>
          <a
            href={userData?.info?.website}
            target="blank"
            className="text-blue-500 font-medium"
          >
            {userData?.info?.website || "Please update your profile"}
          </a>
        </div>
      </div>

      <div>
        <Button
          onClick={() => setContactInfoModalOpen(!contactInfoModalOpen)}
          variant="light"
          className="p-0 font-semibold hover:underline"
        >
          Contact info <ImPencil />
        </Button>
        <ReactCustomModal
          modalIsOpen={contactInfoModalOpen}
          setIsOpen={setContactInfoModalOpen}
          modalTitle="Update your contact information"
        >
          <ContactInfoModalContent
            setContactInfoModalOpen={setContactInfoModalOpen}
          />
        </ReactCustomModal>
      </div>

      <div>
        <FollowerAndFollowing userInfo={userData} />
      </div>

      <div className="lg:hidden block">
        <div className="flex justify-end text-2xl pb-2 cursor-pointer">
          <ImPencil />
        </div>

        <div className="block">
          <p className="font-semibold hover:underline cursor-pointer">
            {userData?.education
              ? userData?.education
              : "Please update your profile"}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <Button className="rounded-full px-4">Open to</Button>
        <Button
          variant="light"
          className="mx-2 btn px-4  rounded-full border text-blue-500 font-medium border-blue-500"
        >
          Add profile section
        </Button>
        <Button variant="bordered" className=" bg-gray-100 rounded-full px-4">
          More
        </Button>
      </div>
    </div>
  );
};

export default PersonalDetails;
