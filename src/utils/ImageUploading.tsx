import { Button } from "@nextui-org/button";
import { AiFillDelete } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import ImageUploading from "react-images-uploading";

type TProps = {
  images: any[];
  onChange: any;
  maxNumber: number;
};

const ImageUploadingUtils = ({ images, maxNumber, onChange }: TProps) => {
  return (
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
  );
};

export default ImageUploadingUtils;
