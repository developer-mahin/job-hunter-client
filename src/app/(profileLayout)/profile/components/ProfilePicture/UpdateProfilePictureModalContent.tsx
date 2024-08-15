"use client";

import useUserInfo from "@/hook/User";
import ImageUploadingUtils from "@/utils/ImageUploading";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useState } from "react";

const UpdateProfilePictureModalContent = () => {
  const { userData } = useUserInfo();
  const [images, setImages] = useState<any[]>([]);
  const [imageDataURl, setImageDataURL] = useState("");
  const maxNumber = 1;

  const onChange = (imageList: any, addUpdateIndex?: number[]) => {
    setImages(imageList);
    setImageDataURL(imageList[0]?.data_url);
  };

  return (
    <div className="">
      <div className="">
        <div className="py-2 flex justify-center items-center">
          <Image
            src={imageDataURl ? imageDataURl : userData?.photo!!}
            width={500}
            height={250}
            className="object-cover w-full h-[400px]"
            alt=""
          />
        </div>
      </div>

      <form className="mt-3">
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
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfilePictureModalContent;
