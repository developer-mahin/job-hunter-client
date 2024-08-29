"use client";

import JForm from "@/app/components/Form/JForm";
import JInputs from "@/app/components/Form/JInputs";
import JSelect from "@/app/components/Form/JSelect";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import ReactQuill from "react-quill";
import { jobTypes, workPlaceTypes } from "../../data/jobSelectInfoData";
import JQuill from "@/app/components/Form/JQuill";

const CreateJobModalContent = () => {
  const [additionalRequirements, setAdditionalRequirements] =
    useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="lg:w-[600px]">
      <JForm onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 gap-4">
          <JInputs label="Job Title" name="jobTitle" type="text" />
          <JInputs label="Company Name" name="companyName" type="text" />
          <JInputs label="Location" name="location" type="text" />
          <JInputs label="Website" name="website" type="text" />
          <JInputs label="Experience" name="experience" type="text" />
          <JInputs label="Skills" name="skills" type="text" />
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          <JSelect selectItems={jobTypes} name="jobType" />

          <JSelect selectItems={workPlaceTypes} name="workPlaceTypes" />
        </div>

        <div className="mt-4">
          <JQuill
            label="Additional Requirements"
            name="additionalRequirements"
            className="h-[130px]"
          />
        </div>

        <Button className="mt-4" type="submit">
          Post Job
        </Button>
      </JForm>
    </div>
  );
};

export default CreateJobModalContent;
