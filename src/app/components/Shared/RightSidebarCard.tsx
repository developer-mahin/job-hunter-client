import { AiOutlinePlus } from "react-icons/ai";
import { TRightSide } from "./RightSidebar";
import Image from "next/image";
import { Button } from "@nextui-org/button";

const RightSidebarCard = ({ info }: { info: TRightSide }) => {
  const { image, name, details } = info;

  return (
    <div className="py-2">
      <div className="flex items-center gap-2">
        <div className="w-fit">
          <Image
            src={image}
            width={500}
            height={500}
            className="size-20 rounded-full object-cover"
            alt=""
          />
        </div>
        <div className="flex-1">
          <h6 className="m-0 font-semibold">{name}</h6>
          <div className="mt-1">
            <p className="text-sm m-0">{details}</p>
          </div>
          <div className="mt-2">
            <Button variant="bordered" className="rounded-full mb-1">
              <AiOutlinePlus />
              <span>Follow</span>
            </Button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default RightSidebarCard;
