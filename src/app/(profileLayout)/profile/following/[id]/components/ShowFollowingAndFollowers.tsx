import { assets } from "@/assets";
import {
  useFollowAndUnFollowMutation,
  useGetMyProfileQuery,
} from "@/redux/api/Features/user/userApi";
import { TUser } from "@/types";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { toast } from "sonner";
import useSound from "use-sound";

type TShowFollowingAndFollowers = {
  user: TUser;
};

const ShowFollowingAndFollowers: React.FC<TShowFollowingAndFollowers> = ({
  user,
}) => {
  const { name, photo, headline, _id } = user;
  const { data } = useGetMyProfileQuery({});
  const [followAndUnFollow] = useFollowAndUnFollowMutation();

  const [like] = useSound(assets.audio.buttonSound);
  const userData = data?.data;
  // find following user for checking
  const findFollowing = userData?.following?.find(
    (item: any) => item?.user?._id === user?._id
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
    <div className="border-b border-gray-400 flex items-center justify-between lg:flex-row flex-col">
      <Link href={`/user_profile/${_id}`}>
        <div className="flex items-center gap-3 py-2">
          <div>
            <Image
              className="size-20 rounded-full object-cover"
              src={photo}
              alt={name}
              width={500}
              height={500}
            />
          </div>
          <div>
            <p className="hover:underline font-medium text-lg">{name}</p>
            <p>{headline}</p>
          </div>
        </div>
      </Link>

      <div className="mt-2">
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
  );
};

export default ShowFollowingAndFollowers;
