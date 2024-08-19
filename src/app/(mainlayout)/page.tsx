"use client";

import { usePathname, useRouter } from "next/navigation";
import Spinners from "../components/Shared/Spinners";

const HomePage = () => {
  const router = useRouter();

  const pathname = usePathname();

  if (pathname === "/") {
    return router.push("/feed");
  }

  return <Spinners className="h-[100vh]" />;
};

export default HomePage;
