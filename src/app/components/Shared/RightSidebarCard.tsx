import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { TUser } from "@/types";
import useUserInfo from "@/hook/User";
import Link from "next/link";
import {
  useFollowAndUnFollowMutation,
  useGetMyProfileQuery,
} from "@/redux/api/Features/user/userApi";
import { toast } from "sonner";
import useSound from "use-sound";
import { assets } from "@/assets";

const RightSidebarCard = ({ info }: { info: TUser }) => {
  const { data } = useGetMyProfileQuery({});
  const [followAndUnFollow] = useFollowAndUnFollowMutation();
  const { photo, name, headline } = info;
  const [like] = useSound(assets.audio.buttonSound);

  const userData = data?.data;
  // find following user for checking
  const findFollowing = userData?.following?.find(
    (user: { user: string }) => user?.user === info?._id
  );

  const handleFollowAndUnFollowUser = async (id: string) => {
    try {
      await followAndUnFollow(id);

      like();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="py-2">
      <div className="flex items-center gap-2">
        <div className="w-fit">
          <Image
            src={photo}
            width={500}
            height={500}
            className="size-20 rounded-full object-cover"
            alt=""
          />
        </div>
        <div className="flex-1">
          <Link
            href={
              userData?._id === info?._id
                ? "/profile"
                : `/user_profile/${info?._id}`
            }
            className="block font-medium text-black no-underline hover:underline hover:text-blue-600"
          >
            {name}
          </Link>

          <div className="mt-1">
            <p className="text-sm m-0">{headline}</p>
          </div>
          <div className="mt-2">
            <Button
              onClick={() => handleFollowAndUnFollowUser(info?._id)}
              variant="bordered"
              className="rounded-full mb-1"
            >
              <AiOutlinePlus />
              <span>{findFollowing ? "Unfollow" : "Follow"}</span>
            </Button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default RightSidebarCard;
