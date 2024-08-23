"use client";

import useUserInfo from "@/hook/User";
import { useUpdateUserProfileMutation } from "@/redux/api/Features/user/userApi";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import { toast } from "sonner";

type TProps = {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AboutModalContent = ({ setModalIsOpen }: TProps) => {
  const [value, setValue] = useState("");
  const { userData } = useUserInfo();
  const [updateUserProfile] = useUpdateUserProfileMutation();

  const onsubmit = async () => {
    const userInfo = {
      id: userData?._id,
      data: {
        about: value,
      },
    };

    try {
      const res = await updateUserProfile(userInfo);
      if (res.data) {
        setModalIsOpen(false);
        toast.success("Contact info updated successfully");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="lg:w-[600px] py-4">
      <div>
        <div className="my-2">
          <ReactQuill
            theme="snow"
            className="h-[150px]"
            value={value}
            onChange={setValue}
          />
        </div>

        <div className="mt-14">
          <Button onClick={() => onsubmit()} className="">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutModalContent;
