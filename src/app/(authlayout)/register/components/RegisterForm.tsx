"use client";

import { imageUploadIntoImgbb } from "@/utils/uploadImageIntoImgbb";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiEyeOff } from "react-icons/fi";
import { toast } from "sonner";
import { registerUser } from "../../authAction/register";

const RegisterForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [imageData, setImageData] = useState<string | null>(null);
  const [addImage, setAddImage] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const handleSignUp = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const formData = new FormData();
    formData.append("image", addImage as File);

    const fullName = firstName + " " + lastName;

    if (!(password === confirmPassword)) {
      return toast.error("Password not matched");
    }

    const upload = await imageUploadIntoImgbb(formData);

    const userInfo = {
      name: fullName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      photo: upload,
    };

    if (formRef.current) {
      formRef.current.reset();
    }

    try {
      const res = await registerUser(userInfo);
      toast.success(res?.message);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSignUp} className="space-y-4 ">
        <div className="flex justify-between items-center space-x-2">
          <Input
            type="text"
            name="firstName"
            label="First Name"
            className="h-11 rounded-md"
            isRequired
            required
          />
          <Input
            type="text"
            name="lastName"
            label="Last Name"
            className="h-11 rounded-md"
            isRequired
            required
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            label="Email"
            className="h-11 rounded-md"
            isRequired
            required
          />
        </div>

        <div className="relative">
          <Input
            type={changePasswordType ? "password" : "text"}
            name="password"
            label="Password"
            className="h-11 rounded-md"
            isRequired
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {changePasswordType ? (
            <FiEyeOff
              onClick={() => {
                setChangePasswordType(changeIcon);
              }}
              className="absolute text-black size-5 top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            />
          ) : (
            <AiOutlineEye
              onClick={() => {
                setChangePasswordType(changeIcon);
              }}
              className="absolute text-black top-1/2 size-5 right-4 transform -translate-y-1/2 cursor-pointer"
            />
          )}
        </div>
        <div>
          <Input
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            className="h-11 rounded-md"
            isRequired
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          <Button type="submit" className="w-1/3">
            Create Account
          </Button>
          <div className="block md:hidden mt-4">
            <Link href="/login" className="font-medium underline">
              or, Sign In
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
