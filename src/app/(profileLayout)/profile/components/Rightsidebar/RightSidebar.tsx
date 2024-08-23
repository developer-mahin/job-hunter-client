import { Button } from "@nextui-org/button";
import { BiRightArrowAlt } from "react-icons/bi";
import RightSideBarCard from "./RightSideBarCard";

export type TRightSidebar = {
  id: number;
  image: string;
  name: string;
  details: string;
};

const rightSideBarInfo: TRightSidebar[] = [
  {
    id: 1,
    image: "https://i.ibb.co/5FKH0ZF/1624162747433.jpg",
    name: "Cefalo Bangladesh Ltd",
    details: "Company | Information, Technology & Service",
  },
  {
    id: 2,
    image: "https://i.ibb.co/nj6V1P8/1557478665329.jpg",
    name: "Craftsmen",
    details: "Company | Information, Technology & Service",
  },
  {
    id: 3,
    image: "https://i.ibb.co/5586VtT/1567108127826.jpg",
    name: "DICE",
    details: "Company | Information",
  },
];

const RightSidebar = () => {
  return (
    <div className="border rounded p-3 sticky top-0 bg-white">
      <p className="font-semibold">Add to your feed</p>
      {rightSideBarInfo.map((info) => (
        <RightSideBarCard key={info.id} info={info} />
      ))}
      <div className="flex items-center justify-center rounded">
        <Button className="btn flex items-center gap-1">
          <span className="font-medium text-gray-500">See All</span>
          <BiRightArrowAlt className="text-2xl text-gray-500" />
        </Button>
      </div>
    </div>
  );
};

export default RightSidebar;
