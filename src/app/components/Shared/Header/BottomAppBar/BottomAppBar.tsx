import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { navItems, TNavItems } from "../Items";
import Link from "next/link";

const BottomAppBar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white ">
      <Navbar>
        <NavbarContent className="">
          {navItems.map((item: TNavItems, i: number) => (
            <div key={i}>
              <NavbarItem>
                <Link
                  color="foreground"
                  href={item.path}
                  className="flex items-center flex-col-reverse"
                >
                  <p className="text-xs text-white">{item.name}</p>
                  <div className="flex items-center justify-center px-4">
                    <p>{item.icon}</p>
                  </div>
                </Link>
              </NavbarItem>
            </div>
          ))}
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default BottomAppBar;
