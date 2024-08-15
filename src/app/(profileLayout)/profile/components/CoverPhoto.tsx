import { TUser } from "@/types";
import Image from "next/image";

type TProps = {
  userData: TUser;
};

const CoverPhoto = ({ userData }: TProps) => {
  return (
    <div className="">
      <Image
        src={
          userData?.coverPhoto
            ? userData?.coverPhoto
            : "https://marketplace.canva.com/EAFIddqdjTk/2/0/1600w/canva-black-minimalist-motivation-quote-linkedin-banner-1PLNOKlL1HU.jpg"
        }
        className="w-full h-60 object-cover cursor-pointer rounded-t"
        alt=""
        width={500}
        height={100}
      />
    </div>
  );
};

export default CoverPhoto;
