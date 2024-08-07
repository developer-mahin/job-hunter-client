"use client";

import { usePathname, useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const pathname = usePathname();

  if (pathname === "/") {
    return router.push("/feed");
  }
};

export default HomePage;
