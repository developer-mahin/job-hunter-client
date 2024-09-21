import Container from "@/app/components/Shared/Container";
import { Input } from "@/components/ui/input";
import { Button, divider } from "@nextui-org/react";
import { dropDownItem } from "./components/dropDownItem";
import { assets } from "@/assets";
import Image from "next/image";

const ImageGeneratePage = () => {
  const defaultImage = [
    assets.images.image1,
    assets.images.image2,
    assets.images.image3,
    assets.images.image4,
  ];

  return (
    <div>
      <div className="aiImageBg">
        <Container>
          <div className="flex items-center justify-center flex-col pt-28">
            <h2 className="text-6xl font-bold text-white">
              AI Image Generator Tool
            </h2>
            <p className="text-white text-lg w-[600px] text-center mt-3">
              Convert your text into an image within a second using this
              JOB-HUNTER powered AI Image Generator tool
            </p>
          </div>

          <div className="relative mt-8">
            <div>
              <Input
                placeholder="Describe what you want to see"
                className="rounded-full bg-white border-none h-14 px-5"
              />
            </div>
            <div className="absolute right-[150px] top-4">
              <select className="bg-transparent">
                {dropDownItem.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <Button className="bg-[#4552E5] text-white rounded-full px-8 absolute right-5 top-2">
              Generate
            </Button>
          </div>
        </Container>
      </div>

      <Container>
        <div className="my-10">
          <div className="grid grid-cols-4 gap-6">
            {defaultImage.map((item, i) => (
              <div key={i}>
                <Image
                  alt=""
                  src={item}
                  width={1000}
                  height={100}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImageGeneratePage;
