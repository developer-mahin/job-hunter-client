"use client";

import { registerUser } from "@/app/(authlayout)/authAction/register";
// import { Button } from "@/components/ui/button";
import { authKey } from "@/constant/authKey";
import { baseurl } from "@/constant/baseurl";
import { setToLocalStorage } from "@/utils/localStorage";
import setAccessToken from "@/utils/setCookies";
import { Button } from "@nextui-org/button";
import { getSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SocialButtons = () => {
  useEffect(() => {
    const getToken = async () => {
      const session = await getSession();

      if (!session) {
        return Error("something went wrong");
      }

      if (session && session.accessToken) {
        console.log(session);

        const userInfo = {
          name: session?.user?.name,
          email: session?.user?.email,
          photo: session?.user?.image,
          password: session?.user?.name,
          confirmPassword: session?.user?.name,
        };

        const res = await fetch(`${baseurl}/auth/register_user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });

        const data = await res.json();

        setAccessToken(session.accessToken);
        setToLocalStorage(authKey.ACCESS_TOKEN, session.accessToken);
        return data;
      }
    };

    getToken();
  }, []);

  return (
    <div className="mt-4">
      <div className="space-y-4">
        <Button className="border w-full gap-x-1">
          <FaFacebook className="size-5" />
          <span>Sign up with Facebook</span>
        </Button>
        <Button
          onClick={() => signIn("google")}
          className="border w-full gap-x-1"
        >
          <FaGoogle className="size-5" />
          <span>Sign up with Google</span>
        </Button>
      </div>
      <p className="font-semibold text-center mt-2">Forgot Password?</p>
    </div>
  );
};

export default SocialButtons;
