"use server";

import { authKey } from "@/constant/authKey";
import { baseurl } from "@/constant/baseurl";
import { cookies } from "next/headers";

export const getMyProfile = async () => {
  const token = cookies().get(authKey.ACCESS_TOKEN)?.value;
  const headers: HeadersInit = {};

  if (token) {
    headers["Authorization"] = `${token}`;
  }
  const res = await fetch(`${baseurl}/user/my_profile`, {
    method: "GET",
    headers,
    cache:"force-cache"
  });

  const data = await res.json();
  return data;
};
