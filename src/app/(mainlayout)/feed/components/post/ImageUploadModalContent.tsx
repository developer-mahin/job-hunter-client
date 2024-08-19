"use client";

import { useCreatePostMutation } from "@/redux/api/Features/Post/postApi";
import ImageUploadingUtils from "@/utils/ImageUploading";
import { imageUploadIntoImgbb } from "@/utils/uploadImageIntoImgbb";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

type TProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ImageUploadModalContent = ({ setIsModalOpen }: TProps) => {
  const [imageDataURl, setImageDataURL] = useState<string>("");
  const [images, setImages] = useState<any[]>([]);
  const maxNumber = 69;
  const [createPost] = useCreatePostMutation();

  const onChange = (imageList: any, addUpdateIndex?: number[]) => {
    setImages(imageList);
    setImageDataURL(imageList[0]?.data_url);
  };

  const handleUploadImage = async () => {
    const image = images[0]?.file;
    const formData = new FormData();
    formData.append("image", image);
    const uploadedImage = await imageUploadIntoImgbb(formData);

    const postData = {
      image: uploadedImage,
    };

    try {
      const res = await createPost(postData);
      if (res.data) {
        setIsModalOpen(false);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="lg:w-[500px] py-3">
      <div>
        {imageDataURl && (
          <Image
            src={imageDataURl}
            width={700}
            height={400}
            className="w-full h-[300px] object-cover rounded-lg"
            alt=""
          />
        )}
      </div>
      <div className="mt-3">
        <ImageUploadingUtils
          images={images}
          onChange={onChange}
          maxNumber={maxNumber}
        />
      </div>
      <Button
        onClick={() => handleUploadImage()}
        disabled={!imageDataURl}
        variant="shadow"
        className="font-medium"
      >
        Submit
      </Button>
    </div>
  );
};

export default ImageUploadModalContent;
