import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { TRightSidebar } from "./RightSidebar";

type TProps = {
  info: TRightSidebar;
};

const RightSideBarCard = ({ info }: TProps) => {
  const { image, name, details } = info;

  return (
    <div className="py-2">
      <div className="flex items-center gap-2">
        <div>
          <Image
            src={image}
            width={60}
            height={60}
            className="object-cover"
            alt=""
          />
        </div>
        <div>
          <h6 className="m-0 font-semibold">{name}</h6>
          <div className="mt-1">
            <p className="text-sm m-0">{details}</p>
          </div>
          <div className="mt-2">
            <button className="flex items-center gap-1 border rounded-full px-3 py-1">
              <AiOutlinePlus />
              <span>Follow</span>
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default RightSideBarCard;
