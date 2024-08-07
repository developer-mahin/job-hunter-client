"use server";

import { baseurl } from "@/constant/baseurl";
import setAccessToken from "@/utils/setCookies";
import { FieldValues } from "react-hook-form";

export type TLoginProps = {
  email: string;
  password: string;
};

export const loginUser = async (
  payload: FieldValues,
  redirect?: string | undefined
) => {
  console.log(payload);
  const res = await fetch(`${baseurl}/auth/login_user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  const data = await res.json();

  if (data.success && data?.data?.token) {
    setAccessToken(data?.data?.token, { redirect });
  }

  return data;
};
