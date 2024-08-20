import { GoLocation } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { BiErrorCircle, BiRightArrowAlt } from "react-icons/bi";
import { AiTwotoneLike } from "react-icons/ai";
import RightSidebarCard from "./RightSidebarCard";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export type TRightSide = {
  id: number;
  image: string;
  name: string;
  details: string;
};

const RightSidebar = () => {
  const rightSideBarInfo: TRightSide[] = [
    {
      id: 1,
      image:
        "https://i.ibb.co/z2tJ2Ws/a-young-24-year-old-bangladeshi-man-with-a-long-su-e7ho-SJVUTTOhubk5y-Xn-Msw-k-Tv-M9qhc-Sd-KWi0-EZ6.png",
      name: "Cefalo Bangladesh Ltd",
      details: "Company | Information, Technology & Service",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co/z2tJ2Ws/a-young-24-year-old-bangladeshi-man-with-a-long-su-e7ho-SJVUTTOhubk5y-Xn-Msw-k-Tv-M9qhc-Sd-KWi0-EZ6.png",
      name: "Craftsmen",
      details: "Company | Information, Technology & Service",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co/z2tJ2Ws/a-young-24-year-old-bangladeshi-man-with-a-long-su-e7ho-SJVUTTOhubk5y-Xn-Msw-k-Tv-M9qhc-Sd-KWi0-EZ6.png",
      name: "DICE",
      details: "Company | Information",
    },
  ];

  return (
    <div className="">
      <div className="mb-3 border bg-gray-50 bg-opacity-15 p-3 rounded-t-xl">
        <form className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <GoLocation />
          </div>
          <Input
            type="text"
            name=""
            isRequired
            label="Enter your location"
            id=""
            className="h-11 pl-10"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <GrClose />
          </div>
        </form>

        <div className="flex gap-1 mt-4">
          <BiErrorCircle className="text-gray-500 w-5 text-lg mt-1" />
          <p className="text-gray-500 text-sm">
            Your location will help us serve better and extend a personalized
            experience.
          </p>
        </div>

        <div className="flex items-center gap-1 my-5">
          <AiTwotoneLike className="text-lg text-gray-500" />
          <p className="uppercase m-0">Recommended Groups</p>
        </div>

        <div>
          {["Leisure", "Activism", "MBA", "Philosophy"].map((group, index) => (
            <div key={index} className="flex items-center justify-between my-4">
              <div className="flex items-center gap-2">
                <Image
                  src="https://i.ibb.co/z2tJ2Ws/a-young-24-year-old-bangladeshi-man-with-a-long-su-e7ho-SJVUTTOhubk5y-Xn-Msw-k-Tv-M9qhc-Sd-KWi0-EZ6.png"
                  width={500}
                  height={500}
                  className="size-20 rounded-full object-cover"
                  alt=""
                />
                <span className="font-medium">{group}</span>
              </div>
              <Button variant="bordered" className="rounded-full">
                Follow
              </Button>
            </div>
          ))}
        </div>

        <div className="text-right">
          <span className="text-blue-500 text-sm">See More...</span>
        </div>
      </div>

      <div className="border bg-gray-50 bg-opacity-15 p-3 rounded-t-xl sticky top-0">
        <p className="font-semibold">Add to your feed</p>
        {rightSideBarInfo.map((info: TRightSide) => (
          <RightSidebarCard key={info.id} info={info}></RightSidebarCard>
        ))}
        <div className="flex items-center justify-center view-profile rounded">
          <Button fullWidth className="flex items-center gap-1">
            <span className="font-medium text-gray-500 text-base">See All</span>
            <BiRightArrowAlt className="text-lg text-gray-500" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
