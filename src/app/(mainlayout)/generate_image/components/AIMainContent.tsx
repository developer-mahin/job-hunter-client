import Container from "@/app/components/Shared/Container";
import { assets } from "@/assets";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import { defaultImage } from "./dropDownItem";

type TProps = {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  imageCount: string;
  setImageCount: React.Dispatch<React.SetStateAction<string>>;
  imageLength: number;
};

const AIMainContent = ({
  imageCount,
  prompt,
  setImageCount,
  setPrompt,
  imageLength,
}: TProps) => {
  return (
    <div>
      <Container>
        <div className="my-10">
          {imageLength ? (
            <div className="flex items-center justify-center lg:flex-nowrap flex-wrap gap-x-6 ">
              {Array.from({ length: imageLength }).map((item, i) => (
                <div
                  key={i}
                  className="w-[300px] bg-gray-200 h-[400px] flex items-center justify-center"
                >
                  <Image
                    alt=""
                    src={assets.svg.loading}
                    width={500}
                    height={200}
                    className="size-20"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center lg:flex-nowrap flex-wrap gap-x-6 ">
              {defaultImage.map((item, i) => (
                <div key={i} className="relative generated_image">
                  <div className="">
                    <Image
                      alt=""
                      src={item}
                      width={1000}
                      height={100}
                      className="w-full"
                    />
                  </div>

                  <div className="absolute download_button right-6 bottom-8">
                    <Button
                      className=" flex items-center"
                      isIconOnly
                      color="primary"
                      radius="full"
                    >
                      <FaDownload className="text-2xl text-white" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AIMainContent;
