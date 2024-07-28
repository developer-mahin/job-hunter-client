import { Button } from "@/components/ui/button";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div className="mt-4">
      <div className="space-y-4">
        <Button className="border rounded-md w-full" variant="ghost">
          <FaFacebook />
          <span>Sign up with Facebook</span>
        </Button>
        <Button className="border rounded-md w-full" variant="ghost">
          <FaGoogle />
          <span>Sign up with Google</span>
        </Button>
      </div>
      <p className="font-semibold text-center mt-2">Forgot Password?</p>
    </div>
  );
};

export default SocialButtons;
