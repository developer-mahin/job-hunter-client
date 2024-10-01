import { FaUserGroup } from "react-icons/fa6";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { RiContactsFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { RiCalendarEventLine } from "react-icons/ri";
import { RiPagesLine } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";

export const networkLestBar = [
  {
    icon: <FaUserGroup className="size-7 text-gray-600" />,
    title: "Connections",
    number: "1,797",
  },
  {
    icon: <RiContactsBookUploadFill className="size-7 text-gray-600" />,
    title: "Contacts",
    number: "212",
  },
  {
    icon: <RiContactsFill className="size-7 text-gray-600" />,
    title: "Following & followers",
    number: "",
  },
  {
    icon: <HiUserGroup className="size-7 text-gray-600" />,
    title: "Groups",
    number: "7",
  },
  {
    icon: <RiCalendarEventLine className="size-7 text-gray-600" />,
    title: "Event",
    number: "1",
  },
  {
    icon: <RiPagesLine className="size-7 text-gray-600" />,
    title: "Page",
    number: "213",
  },
  {
    icon: <FaRegNewspaper className="size-7 text-gray-600" />,
    title: "Newsletters",
    number: "6",
  },
  {
    icon: <FaHashtag className="size-7 text-gray-600" />,
    title: "Hashtags",
    number: "",
  },
];
