import { TUser } from "@/types";
import { Button } from "@nextui-org/button";
import { ImPencil } from "react-icons/im";

type TProps = {
  userData: TUser;
};

const PersonalDetails = ({ userData }: TProps) => {
  return (
    <div>
      <div>
        <h3 className="font-bold text-2xl pb-1">{userData?.name}</h3>
        <div>
          <p className="text-gray-500">
            {userData?.headline
              ? userData?.headline
              : "Please update your profile"}
          </p>
        </div>
        <p className="text-gray-500">
          Talks about
          {userData?.info?.tag
            ? userData?.info?.tag
            : "Please update your profile"}
        </p>

        <div className="flex gap-1">
          <p className="text-gray-500">
            {userData?.info?.country
              ? userData?.info?.country + " ||"
              : "Please update your profile"}
          </p>
          <p className="text-gray-500">
            {userData?.info?.city
              ? userData?.info?.city
              : "Please update your profile"}
          </p>
        </div>
        <div>
          <a
            href={userData?.info?.website}
            target="blank"
            className="text-blue-500 font-medium"
          >
            {userData?.info?.website
              ? userData?.info?.website
              : "Please update your profile"}
          </a>
        </div>
      </div>

      <div>
        <span
          //   onClick={openContactDataModal}
          className="text-blue-500 cursor-pointer font-semibold hover:underline"
        >
          Contact info
        </span>

        {/* <ContactInfoModal
                  refetch={refetch}
                  contactInfoDataModal={contactInfoDataModal}
                  customStyles={customStyles}
                  closeModalForInfo={closeModalForInfo}
                  profile={profile}
                /> */}
      </div>

      <div className="lg:hidden block">
        <div
          //   onClick={openProfileDataModal}
          className="flex justify-end text-2xl pb-2 cursor-pointer"
        >
          <ImPencil />
        </div>

        {/* <ProfileDataUpdateModal
                  profileDataUpdateModal={profileDataUpdateModal}
                  customStyles={customStyles}
                  closeModal={closeModal}
                  profile={profile}
                  refetch={refetch}
                /> */}

        <div className="block">
          <p className="font-semibold hover:underline cursor-pointer">
            {userData?.education
              ? userData?.education
              : "Please update your profile"}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <Button className="rounded-full px-4">Open to</Button>
        <Button
          variant="light"
          className="mx-2 btn px-4  rounded-full border text-blue-500 font-medium border-blue-500"
        >
          Add profile section
        </Button>
        <Button variant="bordered" className=" bg-gray-100 rounded-full px-4">
          More
        </Button>
      </div>
    </div>
  );
};

export default PersonalDetails;
