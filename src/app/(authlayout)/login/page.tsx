import SocialButtons from "@/app/components/Shared/SocialButtons";
import { assets } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  return (
    <div className="bg-[#0F172A] px-4 h-screen flex items-center justify-center text-gray-100">
      <div className="lg:w-[900px] mx-auto py-4 relative">
        <div>
          <div className="bg-green-500 bg-opacity-10 rounded mt-3 hidden md:block">
            <p className="p-3 text-green-500 font-semibold">
              Let&apos;s learn, share & inspire each other with our passion for
              computer engineering. Sign up now
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="mb-3">
              <h2 className="text-3xl font-medium">Sign In</h2>
            </div>
            <div className="hidden md:block">
              <p className="font-semibold">
                If you are new?
                <Link href="/register" className="text-blue close_button ms-1">
                  Create new for free!
                </Link>
              </p>
            </div>
          </div>
          <div className="md:flex">
            <div className="md:w-1/2">
              <LoginForm />
              {/* <SocialButtons /> */}
            </div>

            <div className="hidden md:block md:w-1/2">
              <div>
                <Image
                  src={assets.images.loginBanner}
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
