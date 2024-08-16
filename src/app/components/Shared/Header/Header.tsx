import { assets } from "@/assets";
import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  const DropdownItem = dynamic(() => import("./DropdownItem"), { ssr: false });

  return (
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
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<CiSearch size={18} />}
          type="search"
        />
        <div className="flex items-center gap-4">
          {/* Drop down menu */}
          <DropdownItem />
        </div>
      </NavbarContent>
    </Navbar>
  );
}
