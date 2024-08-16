"use client";

import useUserInfo from "@/hook/User";
import ImageUploadingUtils from "@/utils/ImageUploading";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useState } from "react";

const UpdateCoverPhotoModalContent = () => {
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
            src={
              imageDataURl
                ? imageDataURl
                : userData?.coverPhoto
                ? userData?.coverPhoto
                : "https://marketplace.canva.com/EAFIddqdjTk/2/0/1600w/canva-black-minimalist-motivation-quote-linkedin-banner-1PLNOKlL1HU.jpg"
            }
            width={1200}
            height={300}
            className="object-cover h-[300px]"
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

export default UpdateCoverPhotoModalContent;