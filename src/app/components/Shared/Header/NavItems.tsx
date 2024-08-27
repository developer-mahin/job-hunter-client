"use client";

import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import React from "react";
import { usePathname } from "next/navigation";

type TNavItems = {
  icon: React.ReactNode;
  path: string;
  name: string;
};

const navItems: TNavItems[] = [
  {
    icon: <IoHomeSharp className="text-2xl text-gray-700" />,
    path: "/feed",
    name: "Home",
  },
  {
    icon: <HiUserGroup className="text-2xl text-gray-700" />,
    path: "/feed",
    name: "My Network",
  },
  {
    icon: <MdWork className="text-2xl text-gray-700" />,
    path: "/jobs",
    name: "Jobs",
  },
  {
    icon: <AiFillMessage className="text-2xl text-gray-700" />,
    path: "/feed",
    name: "Massaging",
  },
  {
    icon: <IoIosNotifications className="text-2xl text-gray-700" />,
    path: "/feed",
    name: "Notifications",
  },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item: TNavItems, i: number) => (
        <div key={i}>
          <NavbarItem className={item.path === pathname ? "text-gray-400 px-3" : "px-3"}>
            <Link
              color="foreground"
              href={item.path}
              className="flex items-center flex-col-reverse"
            >
              <p className="font-semibold text-sm text-gray-700">{item.name}</p>
              <div className="flex items-center justify-center">
                <p>{item.icon}</p>
              </div>
            </Link>
          </NavbarItem>
        </div>
      ))}
    </>
  );
};

export default NavItems;
