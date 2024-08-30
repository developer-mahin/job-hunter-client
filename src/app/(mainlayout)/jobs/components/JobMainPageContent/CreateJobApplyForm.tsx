"use client";

import JForm from "@/app/components/Form/JForm";
import JInputs from "@/app/components/Form/JInputs";
import { authKey } from "@/constant/authKey";
import { RootState } from "@/redux/store";
import { decodedToken } from "@/utils/decodeToken";
import { getFromLocalStorage } from "@/utils/localStorage";
import { Button } from "@nextui-org/button";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";

type TProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateJobApplyForm = ({ setIsModalOpen }: TProps) => {
  const { jobId } = useSelector((state: RootState) => state.job);
  const token = getFromLocalStorage(authKey.ACCESS_TOKEN);

  let user;
  if (token) {
    user = decodedToken(token);
  }

  console.log(jobId);

  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    try {
      
    } catch (error) {
      
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
            Apply
          </Button>
        </div>
      </JForm>
    </div>
  );
};

export default CreateJobApplyForm;
