"use client";

import ReactCustomModal from "@/app/components/Shared/ReactModal";
import Spinners from "@/app/components/Shared/Spinners";
import { useGetMyProfileQuery } from "@/redux/api/Features/user/userApi";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { ImPencil } from "react-icons/im";
import About from "./About/About";
import CoverPhoto from "./CoverPhoto/CoverPhoto";
import PersonalDetails from "./PersonalDetails";
import PersonalInfoUpdatedModalContent from "./ProfileModalData/PersonalInfoUpdatedModalContent";
import ProfilePicture from "./ProfilePicture/ProfilePicture";

const ProfileData = () => {
  const [personalInfo, setPersonalInfoModal] = useState<boolean>(false);
  const { data, isLoading } = useGetMyProfileQuery({});

  if (isLoading) {
    return <Spinners className="h-[100vh]" />;
  }

  const userData = data?.data;

  return (
    <>
      <div className="shadow border rounded-xl">
        <div className="relative mb-5">
          <CoverPhoto userData={userData} />
          <div className="absolute top-[120px] left-10">
            <ProfilePicture userData={userData} />
          </div>
        </div>

        <div className="mt-14 p-4 flex flex-col lg:flex-row justify-between">
          <PersonalDetails userData={userData!!} />

          <div className="hidden lg:block">
            <div className="flex items-center justify-end">
              <Button
                onClick={() => setPersonalInfoModal(!personalInfo)}
                isIconOnly
                className="rounded-full"
              >
                <ImPencil className="text-xl" />
              </Button>
              <ReactCustomModal
                modalIsOpen={personalInfo}
                setIsOpen={setPersonalInfoModal}
                modalTitle="Update your personal information"
              >
                <PersonalInfoUpdatedModalContent
                  setPersonalInfoModal={setPersonalInfoModal}
                />
              </ReactCustomModal>
            </div>

            <div className="block">
              <p className="font-semibold hover:underline cursor-pointer">
                {userData?.education
                  ? userData?.education
                  : "Please update your profile"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <About userData={userData} />
    </>
  );
};

export default ProfileData;
