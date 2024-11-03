import { TUser } from "@/types";
import Link from "next/link";

type TFollowerAndFollowing = {
  userInfo: TUser;
};

const FollowerAndFollowing: React.FC<TFollowerAndFollowing> = ({
  userInfo,
}) => {
  const { followers, following } = userInfo;

  return (
    <div>
      <div className="flex items-center gap-x-5 lg:flex-row flex-col">
        <Link
          href={`/profile/followers/${userInfo?.name}`}
          className="font-semibold text-blue-600 hover:underline cursor-pointer"
        >
          {followers.length} Followers
        </Link>
        <Link
          href={`/profile/following/${userInfo?.name}`}
          className="font-semibold text-blue-600 hover:underline cursor-pointer"
        >
          {following.length} Following
        </Link>
      </div>
    </div>
  );
};

export default FollowerAndFollowing;
