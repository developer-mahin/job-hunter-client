import { assets } from "@/assets";
import {
  useFollowAndUnFollowMutation,
  useGetMyProfileQuery,
} from "@/redux/api/Features/user/userApi";
import { TUser } from "@/types";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { toast } from "sonner";
import useSound from "use-sound";

type TProps = {
  user: TUser;
};

const ContentCard: React.FC<TProps> = ({ user }) => {
  const { data: userData } = useGetMyProfileQuery({});
  const [followAndUnFollow] = useFollowAndUnFollowMutation();
  const [like] = useSound(assets.audio.buttonSound);

  // find following user for checking
  const findFollowing = userData?.following?.find(
    (item: { user: string }) => item?.user === user?._id
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
    <div className="border rounded-xl">
      <div className="relative">
        <Image
          alt=""
          src={
            user?.coverPhoto
              ? user?.coverPhoto
              : "https://marketplace.canva.com/EAFIddqdjTk/2/0/1600w/canva-black-minimalist-motivation-quote-linkedin-banner-1PLNOKlL1HU.jpg"
          }
          width={500}
          height={200}
          className="w-full h-[100px] object-cover rounded-t-xl"
        />

        <div className="flex items-center justify-center absolute top-6 lg:left-14 left-32">
          <Image
            alt=""
            src={user?.photo}
            width={500}
            height={200}
            className="size-28 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="pt-12 pb-3 px-3">
        <h3 className="text-center font-semibold">{user.name}</h3>
        <h3 className="text-center text-sm">{user.headline}</h3>

        <div className="flex items-center justify-center py-4">
          <Button
            onClick={() => handleFollowAndUnFollowUser(user?._id)}
            variant="bordered"
            className="rounded-full mb-1"
          >
            <AiOutlinePlus />
            <span>{findFollowing ? "Unfollow" : "Follow"}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
