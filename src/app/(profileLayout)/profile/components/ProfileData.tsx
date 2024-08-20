"use client";

import Spinners from "@/app/components/Shared/Spinners";
import useUserInfo from "@/hook/User";
import { Button } from "@nextui-org/button";
import { BiRightArrowAlt } from "react-icons/bi";
import { ImPencil } from "react-icons/im";
import CoverPhoto from "./CoverPhoto/CoverPhoto";
import PersonalDetails from "./PersonalDetails";
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import RightSideBarCard from "./RightSideBarCard";
import { useGetMyProfileQuery } from "@/redux/api/Features/user/userApi";
import { useState } from "react";
import ReactCustomModal from "@/app/components/Shared/ReactModal";
import PersonalInfoUpdatedModalContent from "./ProfileModalData/PersonalInfoUpdatedModalContent";

export type TRightSidebar = {
  id: number;
  image: string;
  name: string;
  details: string;
};

const rightSideBarInfo: TRightSidebar[] = [
  {
    id: 1,
    image: "https://i.ibb.co/5FKH0ZF/1624162747433.jpg",
    name: "Cefalo Bangladesh Ltd",
    details: "Company | Information, Technology & Service",
  },
  {
    id: 2,
    image: "https://i.ibb.co/nj6V1P8/1557478665329.jpg",
    name: "Craftsmen",
    details: "Company | Information, Technology & Service",
  },
  {
    id: 3,
    image: "https://i.ibb.co/5586VtT/1567108127826.jpg",
    name: "DICE",
    details: "Company | Information",
  },
];

const ProfileData = () => {
  // const { userData, isLoading } = useUserInfo();
  const [personalInfo, setPersonalInfoModal] = useState<boolean>(false);
  const { data: userData, isLoading } = useGetMyProfileQuery({});

  if (isLoading) {
    return <Spinners className="h-[100vh]" />;
  }

  return (
    <div className="flex flex-wrap py-3">
      <div className="w-full md:w-3/4 p-0 lg:p-2">
        <div className="shadow border rounded">
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

        <div className="shadow border rounded mt-3 p-4">
          {/* <Activities /> */}
        </div>
      </div>

      <div className="w-full md:w-1/4 p-0 lg:p-2 mt-3 md:mt-0">
        <div className="border rounded p-3 sticky top-0 bg-white">
          <p className="font-semibold">Add to your feed</p>
          {rightSideBarInfo.map((info) => (
            <RightSideBarCard key={info.id} info={info} />
          ))}
          <div className="flex items-center justify-center rounded">
            <Button className="btn flex items-center gap-1">
              <span className="font-medium text-gray-500">See All</span>
              <BiRightArrowAlt className="text-2xl text-gray-500" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
