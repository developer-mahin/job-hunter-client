"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Menus } from "./sidebarItems";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true);
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div
      className={`bg-white min-h-screen ${
        open ? "w-72" : "w-[71px]"
      } duration-500 border-r shadow-2xl border-gray-100 px-4`}
    >
      <div className={`py-3 flex ${open ? "justify-end" : "justify-end"}`}>
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-2 relative">
        {Menus?.map((menu, i) => (
          <Link
            href={menu?.path}
            key={i}
            className={` ${menu?.margin && "mt-5"} ${
              pathname === menu.path && "bg-primary text-white"
            } group flex items-center text-md gap-3.5 font-medium p-2 hover:bg-primary hover:text-white rounded-md`}
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.title}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 hover:text-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
