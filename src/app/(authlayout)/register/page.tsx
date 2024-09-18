import SocialButtons from "@/app/components/Shared/SocialButtons";
import { assets } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "./components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="bg-[#0F172A] px-4 lg:h-screen h-full flex items-center justify-center text-gray-100">
      <div className="relative lg:w-[1200px] px-6 mx-auto py-2">
        <div className="bg-green-500 bg-opacity-10 rounded mt-3 hidden md:block">
          <p className="p-3 text-green-500 font-semibold">
            Let&apos;s learn, share & inspire each other with our passion for
            computer engineering. Sign up now
          </p>
        </div>
        <>
          <div className="flex justify-between items-center">
            <div className="mb-3">
              <h2 className="text-3xl font-medium">Create Account</h2>
            </div>
            <div className="hidden md:block">
              <p className="font-semibold">
                Already have an account?
                <Link href="/login" className="text-blue close-button ms-1">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-x-10">
            <div className="w-full md:w-1/2">
              <RegisterForm />

              <div className="mt-4">
                <SocialButtons />
              </div>
            </div>
            <div className="hidden md:block w-1/2">
              <div>
                <Image
                  src={assets.images.loginBanner}
                  alt=""
                  className="w-full"
                  width={800}
                  height={200}
                />
              </div>
              <div>
                <p>
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default RegisterPage;
