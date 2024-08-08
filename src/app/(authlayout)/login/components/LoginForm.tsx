"use client";

import JForm from "@/app/components/Form/JForm";
import JInputs from "@/app/components/Form/JInputs";
import { Button } from "@nextui-org/button";
import {
  loginDefaultValues,
  loginValidationSchema,
} from "@/validation/login.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { loginUser } from "../../authAction/login";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      if (res.success) {
        toast.success(res.message);
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
      <div className="flex justify-between items-center">
        <Button type="submit" className="lg:w-1/3 font-semibold">
          Sign In
        </Button>
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
