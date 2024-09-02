"use client";

import {
  LogOut,
  Settings,
  User2
} from "lucide-react";

import { logoutUser } from "@/app/(authlayout)/authAction/logoutUser";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import useUserInfo from "@/hook/User";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdOutlineDashboard } from "react-icons/md";

const DropdownItem = () => {
  const { userData, isLoading } = useUserInfo();
  const router = useRouter();

  const logout = () => {
    logoutUser(router);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src={userData?.photo}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 mt-7 bg-gray-50">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/profile">
            <DropdownMenuItem className="hover:bg-gray-200 rounded-lg cursor-pointer">
              <User2 className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>

          <Link href="/recruiter/dashboard">
            <DropdownMenuItem className="hover:bg-gray-200 rounded-lg cursor-pointer">
              <MdOutlineDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>

          <DropdownMenuItem className="hover:bg-gray-200 rounded-lg cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => logout()}
          className="hover:bg-gray-200 rounded-lg cursor-pointer"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownItem;
