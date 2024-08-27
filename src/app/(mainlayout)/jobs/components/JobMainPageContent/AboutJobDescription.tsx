import { TJob } from "@/types";
import { Button } from "@nextui-org/button";
import { VscGitStashApply } from "react-icons/vsc";

type TProps = {
  job: TJob | null;
};

const AboutJobDescription = ({ job }: TProps) => {
  return (
    <div>
      <div className="flex items-center gap-x-5 mt-4">
        <Button className="font-medium rounded-full">
          <VscGitStashApply className="text-2xl text-gray-700" />
          Apply
        </Button>
        <Button className="font-medium rounded-full" variant="bordered">
          Save
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-2xl font-semibold">About the job</p>
        <h4 className="my-4">
          Job Description / Responsibility
          <p>{job?.additionalRequirements}</p>
        </h4>
      </div>
    </div>
  );
};

export default AboutJobDescription;
