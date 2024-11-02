"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import AboutJobDescription from "./AboutJobDescription";
import JobTitleAndInfo from "./JobTitleAndInfo";

const JobMainPageContent = () => {
  const { job } = useSelector((state: RootState) => state.job);

  return (
    <div className="border rounded-xl bg-gray-100 bg-opacity-70 shadow-lg p-3 h-screen scrollBar">
      <JobTitleAndInfo job={job} />
      <AboutJobDescription job={job} />
    </div>
  );
};

export default JobMainPageContent;
