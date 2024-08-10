import useUserInfo from "@/hook/User";
import { useCreatePostMutation } from "@/redux/api/Features/Post/postApi";
import { imageUploadIntoImgbb } from "@/utils/uploadImageIntoImgbb";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import ImageUploading from "react-images-uploading";
import ReactQuill from "react-quill";
import { toast } from "sonner";

const postOption = [
  {
    key: "article",
    label: "Article",
  },
  { key: "education", label: "Education" },
];

const CreateModalContent = ({ onOpen }: any) => {
  const [selectPost, setSelectPost] = useState("");
  const [imageDataURl, setImageDataURL] = useState("");
  const [images, setImages] = useState<any[]>([]);
  const [quillValue, setQuillValue] = useState("");
  const { userData } = useUserInfo();
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
            <h5 className="text-black font-medium">{userData?.name}</h5>
            <div>
              <Select
                onChange={(e) => setSelectPost(e.target.value)}
                label="Select one..."
                className="w-40 "
                size="sm"
              >
                {postOption.map((option) => (
                  <SelectItem key={option.key}>{option.label}</SelectItem>
                ))}
              </Select>
            </div>
          </div>
        </div>
      </div>

      <form>
        <div className="py-2">
          <ReactQuill
            theme="snow"
            value={quillValue}
            onChange={setQuillValue}
            className="rounded-xl border-0 bg-gray-100 shadow-lg h-[200px] overflow-scroll custom-scrollbar p-0"
            placeholder="Write something..."
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
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({ onImageUpload, isDragging, dragProps, onImageRemoveAll }) => (
              <div className="upload__image-wrapper flex justify-between">
                <div
                  className={`cursor-pointer ${
                    isDragging ? "text-red-500" : ""
                  }`}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <BsImage className="text-black text-3xl" />
                </div>
                <div>
                  <AiFillDelete
                    onClick={onImageRemoveAll}
                    className="text-black text-3xl cursor-pointer"
                  />
                </div>
              </div>
            )}
          </ImageUploading>
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
