"use client";

import { Spinner } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const pathname = usePathname();

  if (pathname === "/") {
    router.push("/feed");
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner label="Loading..." color="success" />
    </div>
  );
};

export default HomePage;
