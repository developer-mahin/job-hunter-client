"use client";

import JForm from "@/app/components/Form/JForm";
import JInputs from "@/app/components/Form/JInputs";
import JQuill from "@/app/components/Form/JQuill";
import JSelect from "@/app/components/Form/JSelect";
import { useCreateJobMutation } from "@/redux/api/Features/Job/jobApi";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import { toast } from "sonner";
import { imageUploadIntoImgbb } from "@/utils/uploadImageIntoImgbb";
import {
  industryTypes,
  jobTypes,
  workPlaceTypes,
} from "@/app/(mainlayout)/jobs/data/jobSelectInfoData";

const JobCreatePageWrapper = () => {
  const [addImage, setAddImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [createJob] = useCreateJobMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    const formData = new FormData();
    if (addImage) {
      formData.append("image", addImage);
    }

    const image = await imageUploadIntoImgbb(formData);

    const jobCreatedData = {
      ...data,
      companyLogo: image,
    };

    try {
      const res = await createJob(jobCreatedData);
      if (res.data) {
        setIsLoading(false);
      }
    } catch (error: any) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <JForm onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 gap-4">
          <JInputs label="Job Title" name="jobTitle" type="text" />
          <JInputs label="Company Name" name="companyName" type="text" />
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mt-4">
          <JInputs label="Location" name="location" type="text" />
          <JInputs label="Website" name="website" type="text" />
          <div className="flex justify-center">
            <label
              className="flex w-full justify-center h-11 bg-gray-200 rounded-xl items-center gap-x-2 cursor-pointer"
              htmlFor="file"
            >
              <FaUpload className="size-[20px]" />
              <p className="text-sm font-medium">
                {addImage?.name ? addImage.name.slice(0, 20) + "..." : "Upload"}
              </p>
            </label>
            <input
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const imageFile = e.target.files[0];
                  setAddImage(imageFile);
                }
              }}
              className="hidden"
              id="file"
              type="file"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mt-4">
          <JSelect
            selectItems={jobTypes}
            label="Job Types"
            required={true}
            name="jobType"
          />
          <JSelect
            selectItems={workPlaceTypes}
            required={true}
            name="workPlaceType"
            label="Work Place Type"
          />
          <JSelect
            selectItems={industryTypes}
            required={true}
            name="industry"
            label="Select Industry..."
          />
        </div>

        <div className="mt-2">
          <JQuill
            label="Description"
            name="jobDescription"
            className="h-[450px]"
          />
        </div>

        <Button className="mt-14" type="submit">
          {isLoading ? "Loading..." : "Post Job "}
        </Button>
      </JForm>
    </div>
  );
};

export default JobCreatePageWrapper;
