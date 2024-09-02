import { IoHomeSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";

export type TNavItems = {
  icon: React.ReactNode;
  path: string;
  name: string;
};

export const navItems: TNavItems[] = [
  {
    icon: <IoHomeSharp className="lg:text-2xl text-xl lg:text-gray-700 text-white" />,
    path: "/feed",
    name: "Home",
  },
  {
    icon: <HiUserGroup className="lg:text-2xl text-xl lg:text-gray-700 text-white" />,
    path: "/feed",
    name: "My Network",
  },
  {
    icon: <MdWork className="lg:text-2xl text-xl lg:text-gray-700 text-white" />,
    path: "/jobs",
    name: "Jobs",
  },
  {
    icon: <AiFillMessage className="lg:text-2xl text-xl lg:text-gray-700 text-white" />,
    path: "/messege",
    name: "Massaging",
  },
  {
    icon: <IoIosNotifications className="lg:text-2xl text-xl lg:text-gray-700 text-white" />,
    path: "/feed",
    name: "Notifications",
  },
];
