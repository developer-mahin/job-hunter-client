import JForm from "@/app/components/Form/JForm";
import JTextarea from "@/app/components/Form/JTextarea";
import { useCreatePostMutation } from "@/redux/api/Features/Post/postApi";
import { useGetMyProfileQuery } from "@/redux/api/Features/user/userApi";
import ImageUploadingUtils from "@/utils/ImageUploading";
import { imageUploadIntoImgbb } from "@/utils/uploadImageIntoImgbb";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateModalContent = ({ setIsModalOpen }: TProps) => {
  const [imageDataURl, setImageDataURL] = useState("");
  const [images, setImages] = useState<any[]>([]);
  const { data: userData } = useGetMyProfileQuery({});
  const maxNumber = 69;
  const [createPost] = useCreatePostMutation();

  const onChange = (imageList: any, addUpdateIndex?: number[]) => {
    setImages(imageList);
    setImageDataURL(imageList[0]?.data_url);
  };

  const handleCreatePost: SubmitHandler<FieldValues> = async (data) => {
    const image = images[0]?.file;
    const formData = new FormData();
    formData.append("image", image);
    const uploadedImage = await imageUploadIntoImgbb(formData);

    const postData = {
      postDetails: data.postDetails,
      image: uploadedImage,
      author: userData?._id,
    };

    try {
      const res = await createPost(postData);

      if (res.data) {
        toast.success("Post created successfully!!!");
        setImageDataURL("");
        setImages([]);
        setIsModalOpen(false);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="lg:w-[600px]">
      <div className="mb-3">
        <div className="flex justify-items-center items-center gap-2 mt-2">
          <div>
            <Image
              width={600}
              height={60}
              src={
                userData?.photo ||
                "https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid"
              }
              className="rounded-full object-cover size-16"
              alt=""
            />
          </div>
          <div>
            <h5 className="text-black text-lg font-semibold">
              {userData?.name}
            </h5>
            <h5 className="">Post to anyone</h5>
          </div>
        </div>
      </div>

      <JForm onSubmit={handleCreatePost}>
        <div className="py-2">
          <JTextarea
            label="Description"
            name="postDetails"
            placeholder="Write your post description"
            className=""
          />
        </div>

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

        <div className={`App mt-${imageDataURl ? "10" : "0"}`}>
          <ImageUploadingUtils
            images={images}
            onChange={onChange}
            maxNumber={maxNumber}
          />
        </div>

        <div className="mt-5 pb-4">
          <Button type="submit" className="font-medium rounded-full">
            Post
          </Button>
        </div>
      </JForm>
    </div>
  );
};

export default CreateModalContent;
