"use client";

import { useUpdateUserProfileMutation } from "@/redux/api/Features/user/userApi";
import { TUser } from "@/types";
import ImageUploadingUtils from "@/utils/ImageUploading";
import { imageUploadIntoImgbb } from "@/utils/uploadImageIntoImgbb";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { toast } from "sonner";

type TProps = {
  userData: TUser;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdateCoverPhotoModalContent = ({ userData, setIsModalOpen }: TProps) => {
  const [images, setImages] = useState<any[]>([]);
  const [updateUserProfile] = useUpdateUserProfileMutation();
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
        coverPhoto: uploadedImage,
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
          <PhotoProvider>
            <PhotoView
              src={
                imageDataURl
                  ? imageDataURl
                  : userData?.coverPhoto
                  ? userData?.coverPhoto
                  : "https://marketplace.canva.com/EAFIddqdjTk/2/0/1600w/canva-black-minimalist-motivation-quote-linkedin-banner-1PLNOKlL1HU.jpg"
              }
            >
              <Image
                src={
                  imageDataURl
                    ? imageDataURl
                    : userData?.coverPhoto
                    ? userData?.coverPhoto
                    : "https://marketplace.canva.com/EAFIddqdjTk/2/0/1600w/canva-black-minimalist-motivation-quote-linkedin-banner-1PLNOKlL1HU.jpg"
                }
                width={1200}
                height={300}
                className="object-cover h-[300px] lg:w-[1100px]"
                alt=""
              />
            </PhotoView>
          </PhotoProvider>
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

export default UpdateCoverPhotoModalContent;
