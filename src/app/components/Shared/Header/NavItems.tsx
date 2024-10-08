"use client";

import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { navItems, TNavItems } from "./Items";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <div className="hidden sm:flex gap-3">
      {navItems.map((item: TNavItems, i: number) => (
        <div
          key={i}
          className={
            item.path === pathname ? "px-3 border-b-3 border-black" : "px-3"
          }
        >
          <NavbarItem>
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
    </div>
  );
};

export default NavItems;
