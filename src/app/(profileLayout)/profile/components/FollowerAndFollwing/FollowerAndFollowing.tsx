import { TUser } from "@/types";

type TFollowerAndFollowing = {
  userInfo: TUser;
};

const FollowerAndFollowing: React.FC<TFollowerAndFollowing> = ({
  userInfo,
}) => {
  const { followers, following } = userInfo;

  return (
    <div>
      <div className="flex items-center justify-between lg:flex-row flex-col">
        <p className="font-semibold text-blue-600 hover:underline">
          {followers.length} Followers
        </p>
        <p className="font-semibold text-blue-600 hover:underline">
          {following.length} Following
        </p>
      </div>
    </div>
  );
};

export default FollowerAndFollowing;
