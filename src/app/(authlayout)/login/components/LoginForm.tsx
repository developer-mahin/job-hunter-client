"use client";

import JForm from "@/app/components/Form/JForm";
import JInputs from "@/app/components/Form/JInputs";
import Credentials from "@/app/components/Shared/Credentials";
import { authKey } from "@/constant/authKey";
import { setToLocalStorage } from "@/utils/localStorage";
import {
  loginDefaultValues,
  loginValidationSchema,
} from "@/validation/login.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { loginUser } from "../../authAction/login";

const LoginForm = () => {
  const router = useRouter();

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      if (res.success) {
        setToLocalStorage(authKey.ACCESS_TOKEN, res?.data?.token);
        toast.success(res.message);
        router.push("/feed");
      } else {
        toast.error("Something went wrong please try again");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <JForm
      onSubmit={handleLogin}
      defaultValues={loginDefaultValues}
      resolver={zodResolver(loginValidationSchema)}
    >
      <div className="mb-2">
        <JInputs label="Email" type="email" name="email" required={true} />
      </div>
      <div className="pb-2 relative">
        <JInputs
          label="Password"
          name="password"
          type="password"
          required={true}
        />
      </div> 
      <div className="flex justify-between items-center lg:flex-row flex-col">
        <div className="grid grid-cols-2 gap-x-14">
          <Button type="submit" fullWidth className="font-semibold w-full">
            Sign In
          </Button>
          <div>
            <Credentials />
          </div>
        </div>

        <div className="block md:hidden mt-4">
          <Link
            href="/register"
            className="font-medium text-decoration-underline"
          >
            or, Create Account
          </Link>
        </div>
      </div>
    </JForm>
  );
};

export default LoginForm;
