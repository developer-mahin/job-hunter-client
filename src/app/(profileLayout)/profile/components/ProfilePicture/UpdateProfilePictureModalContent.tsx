"use client";

import { useUpdateUserProfileMutation } from "@/redux/api/Features/user/userApi";
import { TUser } from "@/types";
import ImageUploadingUtils from "@/utils/ImageUploading";
import { imageUploadIntoImgbb } from "@/utils/uploadImageIntoImgbb";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

type TProps = {
  userData: TUser;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdateProfilePictureModalContent = ({
  userData,
  setIsModalOpen,
}: TProps) => {
  const [updateUserProfile] = useUpdateUserProfileMutation();
  const [images, setImages] = useState<any[]>([]);
  const [imageDataURl, setImageDataURL] = useState("");
  const maxNumber = 1;

  const onChange = (imageList: any, addUpdateIndex?: number[]) => {
    setImages(imageList);
    setImageDataURL(imageList[0]?.data_url);
  };

  const handleChangeProfilePicture = async (id: string) => {
    const image = images[0]?.file;
    const formData = new FormData();
    formData.append("image", image);
    const uploadedImage = await imageUploadIntoImgbb(formData);

    const userInfo = {
      id,
      data: {
        photo: uploadedImage,
      },
    };

    try {
      const res = await updateUserProfile(userInfo);
      if (res.data) {
        setIsModalOpen(false);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="">
      <div className="">
        <div className="py-2 flex justify-center items-center">
          <Image
            src={imageDataURl ? imageDataURl : userData?.photo!!}
            width={500}
            height={250}
            className="object-cover w-full lg:h-[400px] h-[250px]"
            alt=""
          />
        </div>
      </div>

      <div className="mt-3">
        <div className="">
          <ImageUploadingUtils
            images={images}
            onChange={onChange}
            maxNumber={maxNumber}
          />
        </div>

        <div className="float-right mt-3">
          <Button
            color={images.length === 0 ? "default" : "success"}
            disabled={images.length === 0}
            onClick={() => handleChangeProfilePicture(userData?._id as string)}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePictureModalContent;
