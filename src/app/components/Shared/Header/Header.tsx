import { assets } from "@/assets";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const DropdownItem = dynamic(() => import("./DropdownItem"), { ssr: false });
  const NavItems = dynamic(() => import("./NavItems"), { ssr: false });

  return (
    <div className="">
      <Navbar isBordered maxWidth="2xl" isBlurred className="h-[100px] py-3 ">
        <NavbarContent justify="start">
          <Link href="/feed" className="cursor-pointer">
            <NavbarBrand className="mr-4">
              <Image
                src={assets.images.logo}
                width={500}
                height={80}
                className="w-full h-[90px]"
                alt=""
              />
            </NavbarBrand>
          </Link> 
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <div className="hidden sm:flex gap-3">
            <NavItems />
          </div>
          <div className="flex items-center gap-4">
            {/* Drop down menu */}
            <DropdownItem />
          </div>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
