"use client";

import { authKey } from "@/constant/authKey";
import { getFromLocalStorage } from "@/utils/localStorage";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const token = getFromLocalStorage(authKey.ACCESS_TOKEN);

  if (token) {
    return router.push("/feed");
  } else {
    return router.push("/login");
  }
};

export default HomePage;
