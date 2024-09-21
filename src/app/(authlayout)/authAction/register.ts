"use server";

import { baseurl } from "@/constant/baseurl";

export type TRegisterProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  photo: string;
};

export const registerUser = async (
  payload: TRegisterProps,
  redirect?: string | undefined
) => {
  const res = await fetch(`${baseurl}/auth/register_user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  return data;
};
