import { useUpdatePostMutation } from "@/redux/api/Features/Post/postApi";
import { TPost } from "@/types";
import ImageUploadingUtils from "@/utils/ImageUploading";
import { imageUploadIntoImgbb } from "@/utils/uploadImageIntoImgbb";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

type TProps = {
  post: TPost;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdatePostModalContent = ({ post, setIsModalOpen }: TProps) => {
  const [imageDataURl, setImageDataURL] = useState("");
  const [images, setImages] = useState<any[]>([]);
  const [quillValue, setQuillValue] = useState("");
  const maxNumber = 1;
  const [updatePost] = useUpdatePostMutation();

  const onChange = (imageList: any, addUpdateIndex?: number[]) => {
    setImages(imageList);
    setImageDataURL(imageList[0]?.data_url);
  };

  const handleUpdatePost = async (id: string) => {
    const image = images[0]?.file;
    const formData = new FormData();
    formData.append("image", image);
    let uploadedImage;
    if (image) {
      uploadedImage = await imageUploadIntoImgbb(formData);
    }

    const postData = {
      postId: id,
      postInfo: {
        postDetails: quillValue || post?.postDetails,
        image: uploadedImage || post?.image,
      },
    };

    try {
      const res = await updatePost(postData);

      if (res.data) {
        toast.success("Post updated successfully!!!");
        setImageDataURL("");
        setImages([]);
        setQuillValue("");
        setIsModalOpen(false);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="lg:w-[600px] w-full">
      <div className="py-2">
        <Textarea
          label="Description"
          onChange={(e) => setQuillValue(e.target.value)}
          placeholder="Write your post description"
          fullWidth
        />
      </div>

      <div className="mb-3">
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

      <div className={`App mt-${imageDataURl ? "10" : "0"}`}>
        <ImageUploadingUtils
          images={images}
          onChange={onChange}
          maxNumber={maxNumber}
        />
      </div>

      <div className="mt-5 pb-4">
        <Button
          onClick={() => handleUpdatePost(post?._id)}
          className="font-medium rounded-full"
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default UpdatePostModalContent;
