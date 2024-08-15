import { TUser } from "@/types";
import Image from "next/image";

type TProps = {
  userData: TUser;
};

const ProfilePicture = ({ userData }: TProps) => {
  return (
    <div className="">
      <Image
        className="rounded-full object-cover size-44 cursor-pointer"
        alt=""
        src={userData?.photo!!}
        width={500}
        height={100}
      />
    </div>
  );
};

export default ProfilePicture;
