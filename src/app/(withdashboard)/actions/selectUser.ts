"use server";

import { authKey } from "@/constant/authKey";
import { baseurl } from "@/constant/baseurl";
import { cookies } from "next/headers";

export const selectUser = async (
  payload: { userId: string; jobId: string },
  redirect?: string | undefined
) => {
  const token = cookies().get(authKey.ACCESS_TOKEN)?.value;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token && { Authorization: token }),
  };

  const res = await fetch(
    `${baseurl}/job_apply/select_candidate/${payload.jobId}`,
    {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({ userId: payload.userId }),
      credentials: "include",
    }
  );

  const data = await res.json();
  return data;
};
