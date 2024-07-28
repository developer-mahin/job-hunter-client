import { Button } from "@/components/ui/button";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div className="mt-4">
      <div className="space-y-4">
        <Button className="border w-full gap-x-1" variant="ghost">
          <FaFacebook className="size-5" />
          <span>Sign up with Facebook</span>
        </Button>
        <Button className="border w-full gap-x-1" variant="ghost">
          <FaGoogle className="size-5" />
          <span>Sign up with Google</span>
        </Button>
      </div>
      <p className="font-semibold text-center mt-2">Forgot Password?</p>
    </div>
  );
};

export default SocialButtons;
