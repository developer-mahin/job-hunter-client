import { TJob } from "@/types";
import { Button } from "@nextui-org/button";
import moment from "moment";
import Image from "next/image";
import { FaRegLightbulb } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { MdWork } from "react-icons/md";
import { PiListChecksBold } from "react-icons/pi";

type TProps = {
  job: TJob | null;
};

const JobTitleAndInfo = ({ job }: TProps) => {
  return (
    <div>
      <div className="flex items-center gap-x-2">
        <Image
          className="size-14"
          src={job?.companyLogo || "https://www.logodesign.net/logo/line-art-buildings-in-swoosh-1273ld.png?nwm=1&nws=1&industry=company&sf=&txt_keyword=All"}
          alt=""
          width={100}
          height={100}
        />
        <a
          className="font-medium hover:underline"
          href={job?.website}
          target="_blank"
        >
          {job?.website}
        </a>
      </div>

      <div className="mt-4"></div>

      <h4 className="text-2xl font-semibold hover:underline">
        {job?.jobTitle}
      </h4>

      <div className="flex items-center gap-x-2 mt-1">
        <p>{job?.location}</p>
        {moment(job?.createdAt).startOf("hour").fromNow()}
      </div>

      <div className="flex items-center gap-x-2 mt-2">
        <p>
          <MdWork className="text-2xl text-gray-600" />
        </p>
        <Button size="sm" className="py-0">
          {job?.workPlaceType}
        </Button>{" "}
        {" . "}
        <Button size="sm">{job?.jobType}</Button> {" . "}
      </div>

      <div className="my-2">
        <h2 className="flex items-center gap-x-2 my-2">
          <PiListChecksBold className="text-3xl" />{" "}
          <p>4 of 5 skills match your profile - you may be a good fit</p>
        </h2>

        <h2 className="flex items-center gap-x-2 my-2">
          <FiCheckCircle className="text-3xl" />{" "}
          <p>
            Applicant review time is typically 5 days{" "}
            <span className="underline">Learn more</span>
          </p>
        </h2>

        <h2 className="flex items-center gap-x-2 my-2">
          <FaRegLightbulb className="text-3xl" />{" "}
          <p>
            See how you compare to over 100 other applicants.{" "}
            <span className="underline">Try Premium for BDT0</span>
          </p>
        </h2>
      </div>
    </div>
  );
};

export default JobTitleAndInfo;
