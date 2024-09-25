import { TUser } from "@/types";
import PhotoViewer from "@/utils/PhotoViewer";

type TProps = {
  singleUserData: TUser;
};

const ProfileInfo = ({ singleUserData }: TProps) => {
  return (
    <div className="shadow border rounded-xl">
      <div className="relative mb-5">
        <div className="relative">
          <PhotoViewer
            src={
              singleUserData?.coverPhoto
                ? singleUserData?.coverPhoto
                : "https://marketplace.canva.com/EAFIddqdjTk/2/0/1600w/canva-black-minimalist-motivation-quote-linkedin-banner-1PLNOKlL1HU.jpg"
            }
            className="h-60 rounded-t-xl w-full"
          />
        </div>
        <div className="absolute top-[120px] left-10">
          <PhotoViewer
            src={singleUserData?.photo!!}
            className="rounded-full size-44"
          />
        </div>
      </div>

      <div className="mt-14 p-4 flex flex-col lg:flex-row justify-between">
        <div>
          <div>
            <h3 className="font-bold text-2xl pb-1">{singleUserData?.name}</h3>
            <div>
              <p className="text-gray-500">
                {singleUserData?.headline || "Profile not updated"}
              </p>
            </div>
            <p className="text-gray-500">
              Talks about {singleUserData?.info?.tag || "Profile not updated"}
            </p>

            <div className="flex gap-1">
              <p className="text-gray-500">
                {singleUserData?.info?.city || "Profile not updated"}
              </p>
              {" ||"}
              <p className="text-gray-500">
                {singleUserData?.info?.country
                  ? singleUserData?.info?.country
                  : "Profile not updated"}
              </p>
            </div>
            <div>
              <a
                href={singleUserData?.info?.website}
                target="blank"
                className="text-blue-500 font-medium"
              >
                {singleUserData?.info?.website || "Profile not updated"}
              </a>
            </div>
          </div>

          <div></div>

          <div className="lg:hidden block">
            <div className="block">
              <p className="font-semibold hover:underline cursor-pointer">
                {singleUserData?.education
                  ? singleUserData?.education
                  : "Profile not updated"}
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="block">
            <p className="font-semibold hover:underline cursor-pointer">
              {singleUserData?.education
                ? singleUserData?.education
                : "Profile not updated"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
