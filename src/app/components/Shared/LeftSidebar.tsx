"use client";

import useUserInfo from "@/hook/User";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";

const LeftSidebar = () => {
  const { userData } = useUserInfo();

  return (
    <div className="sticky top-0 bg-gray-50">
      <div className="border rounded-lg rounded-t-xl">
        <div className="relative">
          <div>
            <Image
              src={
                userData?.photo ||
                "https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid"
              }
              className="w-full h-[120px] rounded-t-xl object-cover"
              width={500}
              height={80}
              alt=""
            />
          </div>
          <div className="">
            <div className="absolute bottom-[-40px] left-[37%]">
              <Link href="/profile">
                <Image
                  src="https://i.ibb.co/z2tJ2Ws/a-young-24-year-old-bangladeshi-man-with-a-long-su-e7ho-SJVUTTOhubk5y-Xn-Msw-k-Tv-M9qhc-Sd-KWi0-EZ6.png"
                  alt=""
                  width={500}
                  height={70}
                  className="rounded-full size-24 object-cover border cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-7 px-4 pt-3">
          <div className="text-center">
            <div>
              <Link
                href="/profile"
                className="hover:underline font-semibold text-black"
              >
                {userData?.name}
              </Link>
            </div>
            <span className="text-sm font-normal">Headline</span>
          </div>
        </div>
        <hr />
        <div className="py-3">
          <div className="px-3">
            <div className="flex items-center justify-between">
              <p className="text-sm mb-0 text-gray-500">
                Who&apos;s viewed your profile
              </p>
              <p className="text-sm mb-0 text-yellow-500">661</p>
            </div>
          </div>
          <div className="px-3">
            <div className="flex items-center justify-between">
              <p className="text-sm mb-0 text-gray-500">
                Impressions on your post
              </p>
              <p className="text-sm mb-0 text-yellow-500">8597</p>
            </div>
          </div>
        </div>
        <hr className="mb-0" />
        <div>
          <div className="p-3">
            <p className="text-sm text-gray-500 mb-0">
              Access exclusive hrefols & insights
            </p>
            <p className="flex items-center gap-1 mb-0">
              <AiFillStar className="text-yellow-500 text-lg" />
              <span className="text-sm text-gray-500 underline font-semibold cursor-pointer">
                Try premium for free
              </span>
            </p>
          </div>
          <hr className="m-0" />
          <div>
            <div className="p-3 rounded-b-lg">
              <p className="flex items-center gap-1 mb-0">
                <BsFillBookmarkFill className="text-yellow-500 text-lg" />
                <span className="text-sm text-gray-500 font-semibold cursor-pointer">
                  My Items
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden block mt-3">{/* <RightSideBar /> */}</div>
    </div>
  );
};

export default LeftSidebar;
