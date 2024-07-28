"use client";

import JForm from "@/app/components/Form/JForm";
import JInputs from "@/app/components/Form/JInputs";
import { Button } from "@/components/ui/button";
import { imageUploadIntoImgbb } from "@/utils/uploadImageIntoImgbb";
import {
  registerDefaultValues,
  registerValidation,
} from "@/validation/register.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { AiOutlineEye } from "react-icons/ai";
import { FiEyeOff } from "react-icons/fi";
import { toast } from "sonner";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState<string | null>(null);
  const [addImage, setAddImage] = useState<File | null>(null);

  const convertImage = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0] as File;
    setAddImage(image);
    if (image) {
      const render = new FileReader();
      render.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          setImageData(e.target.result as string);
        }
      };
      render.readAsDataURL(image);
    }
  };

  const [changePasswordType, setChangePasswordType] = useState(true);
  const changeIcon = changePasswordType === true ? false : true;

  const handleSignUp: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();
    formData.append("image", addImage as File);

    const fullName = data.firstName + " " + data.lastName;

    if (!(data.password === data.confirmPassword)) {
      return toast.error("Password not matched");
    }

    const upload = await imageUploadIntoImgbb(formData);

    const userInfo = {
      name: fullName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      photo: upload,
    };

    console.log(data);
  };

  return (
    <JForm
      onSubmit={handleSignUp}
      defaultValues={registerDefaultValues}
      resolver={zodResolver(registerValidation)}
    >
      <div className="grid lg:grid-cols-2 gap-6 pb-2">
        <div>
          <JInputs
            type="text"
            name="firstName"
            placeholder="First Name"
            label="First Name"
            labelClass="text-gray-100"
          />
        </div>
        <div>
          <JInputs
            type="text"
            name="lastName"
            placeholder="Last name"
            label="Last Name"
            labelClass="text-gray-100"
          />
        </div>
      </div>
      <div className="pb-2">
        <JInputs
          type="email"
          name="email"
          placeholder="Email"
          label="Email"
          labelClass="text-gray-100"
        />
      </div>

      <div className="pb-2 relative">
        <JInputs
          type={changePasswordType ? "password" : "text"}
          name="password"
          placeholder="Password"
          label="Password"
          labelClass="text-gray-100"
        />
        {changePasswordType ? (
          <FiEyeOff
            onClick={() => {
              setChangePasswordType(changeIcon);
            }}
            className="absolute right-4 top-[38px] cursor-pointer text-gray-800 text-xl"
          />
        ) : (
          <AiOutlineEye
            onClick={() => {
              setChangePasswordType(changeIcon);
            }}
            className="absolute right-4 top-[38px] cursor-pointer text-gray-800 text-xl"
          />
        )}
      </div>
      <div className="pb-2">
        <JInputs
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          labelClass="text-gray-100"
          placeholder="Confirm Password"
        />
      </div>

      <div className="flex items-center gap-4 py-2">
        <div className="w-[80px] h-[80px]">
          <Image
            src={
              imageData
                ? imageData
                : "https://t3.ftcdn.net/jpg/05/53/79/60/240_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
            }
            width={500}
            height={200}
            className="w-full h-full object-cover border-[3px] border-gray-100 rounded-full"
            alt=""
          />
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="image"
            accept="image/*"
            name="image"
            required
            onChange={convertImage}
            className="w-full p-3 text-white font-medium border-2 rounded-md"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Button
          type="submit"
          className="bg-opacity-20 text-[#38bdf8] hover:text-secondary w-full rounded-full mt-3 font-medium"
        >
          Create Account
        </Button>
        <div className="block md:hidden mt-4">
          <Link href="/login" className="font-medium underline">
            or, Sign In
          </Link>
        </div>
      </div>
    </JForm>
  );
};

export default RegisterForm;
