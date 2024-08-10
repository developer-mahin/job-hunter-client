import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import ImageUploading from "react-images-uploading";
import ReactQuill from "react-quill";

const CreateModalContent = () => {
  const [selectPost, setSelectPost] = useState("");
  const [imageDataURl, setImageDataURL] = useState("");
  const [images, setImages] = useState([]);
  const [quillValue, setQuillValue] = useState("");
  const maxNumber = 69;

  console.log(images);

  const onChange = (imageList, addUpdateIndex, e) => {
    setImages(imageList);
    setImageDataURL(imageList[0]?.data_url);
  };

  return (
    <div>
      <div className="mb-3">
        <div className="flex justify-items-center items-center gap-2 mt-2">
          <div>
            <Image
              width={60}
              height={60}
              src="https://i.ibb.co/z2tJ2Ws/a-young-24-year-old-bangladeshi-man-with-a-long-su-e7ho-SJVUTTOhubk5y-Xn-Msw-k-Tv-M9qhc-Sd-KWi0-EZ6.png"
              className="rounded-full object-cover"
              alt=""
            />
          </div>
          <div>
            <h5 className="text-black">Name</h5>
            <div>
              <select
                onChange={(e) => setSelectPost(e.target.value)}
                className="form-control font-semibold bg-black text-black cursor-pointer"
              >
                <option value="select one">Select One...</option>
                <option value="article">Article</option>
                <option value="education">Education</option>
              </select>
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
            disabled={!quillValue.length || !selectPost.length}
            type="submit"
            variant={
              !quillValue.length || !selectPost.length ? "flat" : "faded"
            }
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
