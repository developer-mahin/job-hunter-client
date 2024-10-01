"use client";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { networkLestBar } from "./fakeData";
import { useState } from "react";

const MyNetworksLeftBar = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  return (
    <div className="bg-gray-50 border rounded-xl px-7 py-4">
      <div
        onClick={() => setToggle(!toggle)}
        className="flex cursor-pointer items-center justify-between"
      >
        <h2 className="font-semibold text-lg">Manage my networks</h2>
        {toggle ? (
          <IoIosArrowUp className="text-2xl" />
        ) : (
          <IoIosArrowDown className="text-2xl" />
        )}
      </div>
      <div className={toggle ? "block" : "hidden"}>
        {networkLestBar.map((item, i: number) => (
          <div
            key={i}
            className="flex items-center justify-between py-4 cursor-pointer border-b"
          >
            <div className="flex items-center gap-x-4">
              <p>{item.icon}</p>
              <p className="text-lg font-medium">{item.title}</p>
            </div>
            <p>{item.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyNetworksLeftBar;
