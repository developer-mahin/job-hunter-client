"use client";

import JForm from "@/app/components/Form/JForm";
import JQuill from "@/app/components/Form/JQuill";
import useUserInfo from "@/hook/User";
import { useUpdateUserProfileMutation } from "@/redux/api/Features/user/userApi";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AboutModalContent = ({ setModalIsOpen }: TProps) => {
  const { userData } = useUserInfo();
  const [updateUserProfile] = useUpdateUserProfileMutation();

  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const userInfo = {
      id: userData?._id,
      data: {
        about: data.about,
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
      <JForm onSubmit={onsubmit}>
        <div className="mb-2">
          <JQuill name="about" className="h-[150px]" />
        </div>

        <div className="mt-14">
          <Button className="">Save</Button>
        </div>
      </JForm>
    </div>
  );
};

export default AboutModalContent;
