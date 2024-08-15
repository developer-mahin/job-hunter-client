"use client"

import { TUser } from "@/types";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import ImageUploading from "react-images-uploading";

type TProps = {
  userData: TUser;
};

const UpdateCoverPhotoModalContent = ({ userData }: TProps) => {
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
        <div className="App">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({ onImageUpload, isDragging, dragProps, onImageRemoveAll }) => (
              <div className="flex justify-between">
                <div
                  className="bg-transparent cursor-pointer"
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <BsImage className=" text-3xl" />
                </div>
                <Button isIconOnly className="rounded-full" color="danger">
                  <AiFillDelete
                    onClick={() => {
                      onImageRemoveAll();
                    }}
                    className=" text-3xl cursor-pointer"
                  />
                </Button>
              </div>
            )}
          </ImageUploading>
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
