"use client";

import { TUser } from "@/types";
import { useState } from "react";

type TProps = {
  singleUserData: TUser;
};

const AboutInfo = ({ singleUserData }: TProps) => {
  const [seeAllDetails, setSeeAllDetails] = useState<boolean>(true);
  const changeState = seeAllDetails === true ? false : true;

  return (
    <div className="shadow border rounded-xl mt-3 p-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-xl">About</p>
      </div>

      {singleUserData?.about && (
        <div>
          {changeState ? (
            <div
              dangerouslySetInnerHTML={{
                __html: singleUserData?.about,
              }}
            />
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: singleUserData?.about?.slice(0, 350) + "...",
              }}
            />
          )}
          <p
            className=" font-semibold cursor-pointer"
            onClick={() => setSeeAllDetails(!seeAllDetails)}
          >
            {changeState ? "see less" : "see more..."}
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutInfo;
