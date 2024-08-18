import { useCreatePostMutation } from "@/redux/api/Features/Post/postApi";
import { useGetMyProfileQuery } from "@/redux/api/Features/user/userApi";
import ImageUploadingUtils from "@/utils/ImageUploading";
import { imageUploadIntoImgbb } from "@/utils/uploadImageIntoImgbb";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const postOption = [
  {
    key: "article",
    label: "Article",
  },
  { key: "education", label: "Education" },
];

const CreateModalContent = () => {
  const [selectPost, setSelectPost] = useState("");
  const [imageDataURl, setImageDataURL] = useState("");
  const [images, setImages] = useState<any[]>([]);
  const [quillValue, setQuillValue] = useState("");
  const { data: userData } = useGetMyProfileQuery({});
  const maxNumber = 69;
  const [createPost] = useCreatePostMutation();

  const onChange = (imageList: any, addUpdateIndex?: number[]) => {
    setImages(imageList);
    setImageDataURL(imageList[0]?.data_url);
  };

  const handleCreatePost = async () => {
    const image = images[0]?.file;
    const formData = new FormData();
    formData.append("image", image);
    const uploadedImage = await imageUploadIntoImgbb(formData);

    const postData = {
      postDetails: quillValue,
      image: uploadedImage,
      postCategory: selectPost,
      author: userData?._id,
    };

    try {
      const res = await createPost(postData);

      if (res.data) {
        toast.success("Post created successfully!!!");
        setImageDataURL("");
        setImages([]);
        setQuillValue("");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div>
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

      <form>
        <div className="py-2">
          <Textarea
            label="Description"
            onChange={(e) => setQuillValue(e.target.value)}
            placeholder="Write your post description"
            fullWidth
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
          <Button
            // disabled={!quillValue.length || !selectPost.length}
            variant={
              !quillValue.length || !selectPost.length ? "flat" : "faded"
            }
            onClick={() => handleCreatePost()}
            className="font-medium rounded-full"
          >
            Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateModalContent;
