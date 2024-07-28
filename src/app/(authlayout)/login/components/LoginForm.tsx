"use client";

import JForm from "@/app/components/Form/JForm";
import JInputs from "@/app/components/Form/JInputs";
import { Button } from "@/components/ui/button";
import {
  loginDefaultValues,
  loginValidationSchema,
} from "@/validation/login.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";

const LoginForm = () => {
  const handleLogin: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <JForm
      onSubmit={handleLogin}
      defaultValues={loginDefaultValues}
      resolver={zodResolver(loginValidationSchema)}
    >
      <div className="mb-2">
        <JInputs
          label="Email"
          type="email"
          name="email"
          placeholder="Email"
          required={true}
          labelClass="text-gray-100"
        />
      </div>
      <div className="pb-2 relative">
        <JInputs
          label="Password"
          name="password"
          required={true}
          type="password"
          placeholder="Password"
          labelClass="text-gray-100"
        />
      </div>
      <div className="flex justify-between items-center">
        <Button
          type="submit"
          className="bg-opacity-20 text-[#38bdf8] hover:text-secondary w-full rounded-full mt-3 font-medium"
        >
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
