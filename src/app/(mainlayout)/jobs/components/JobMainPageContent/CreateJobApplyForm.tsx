"use client";

import JForm from "@/app/components/Form/JForm";
import JInputs from "@/app/components/Form/JInputs";
import Spinners from "@/app/components/Shared/Spinners";
import { authKey } from "@/constant/authKey";
import { useCreateJobApplyMutation } from "@/redux/api/Features/JobApply/JobApply";
import { RootState } from "@/redux/store";
import { TAuthUser } from "@/types";
import { decodedToken } from "@/utils/decodeToken";
import { getFromLocalStorage } from "@/utils/localStorage";
import { Button } from "@nextui-org/button";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "sonner";

type TProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateJobApplyForm = ({ setIsModalOpen }: TProps) => {
  const { jobId } = useSelector((state: RootState) => state.job);

  const [createJobApply, { isLoading }] = useCreateJobApplyMutation();

  const token = getFromLocalStorage(authKey.ACCESS_TOKEN);

  let user: TAuthUser;
  if (token) {
    user = decodedToken(token) as TAuthUser;
  }

  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const applyData = {
      ...data,
      jobId,
      candidateId: user?.userId,
    };

    try {
      const res = await createJobApply(applyData);

      if (res.data !== undefined) {
        setIsModalOpen(false);
        toast.success("Successfully applied the job");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="lg:w-[500px]">
      <JForm onSubmit={onsubmit}>
        <div className="flex flex-col gap-y-3">
          <JInputs
            label="Enter your full name"
            name="candidateName"
            type="text"
            required={true}
          />
          <JInputs
            label="Enter your email address"
            name="candidateEmail"
            type="text"
            required={true}
          />
          <JInputs
            label="Your expected salary"
            name="expectedSalary"
            type="text"
            required={true}
          />
          <JInputs
            label="Total year of experience"
            name="experience"
            type="text"
            required={true}
          />
          <JInputs
            label="Notice period"
            name="noticePeriod"
            type="text"
            required={true}
          />
          <JInputs
            label="Drop your resume link with public access"
            name="resume"
            type="text"
            required={true}
          />
        </div>

        <div className="mt-4">
          <Button className="" type="submit">
            {isLoading ? <Spinners size="sm" /> : "Apply"}
          </Button>
        </div>
      </JForm>
    </div>
  );
};

export default CreateJobApplyForm;
