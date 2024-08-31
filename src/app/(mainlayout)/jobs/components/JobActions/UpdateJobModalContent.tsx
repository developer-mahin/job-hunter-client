import JForm from "@/app/components/Form/JForm";
import JInputs from "@/app/components/Form/JInputs";
import JQuill from "@/app/components/Form/JQuill";
import JSelect from "@/app/components/Form/JSelect";
import { useUpdateJobMutation } from "@/redux/api/Features/Job/jobApi";
import { RootState } from "@/redux/store";
import { imageUploadIntoImgbb } from "@/utils/uploadImageIntoImgbb";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { jobTypes, workPlaceTypes } from "../../data/jobSelectInfoData";

type TProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdateJobModalContent = ({ setIsModalOpen }: TProps) => {
  const [addImage, setAddImage] = useState<File | null>(null);
  const [createJob, { isLoading }] = useUpdateJobMutation();
  const { jobId, job } = useSelector((state: RootState) => state.job);

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();
    if (addImage) {
      formData.append("image", addImage);
    }

    let image;
    if (addImage) {
      image = await imageUploadIntoImgbb(formData);
    }

    const jobUpdatedData = {
      jobId,
      jobInfo: {
        jobTitle: data.jobTitle || job?.jobTitle,
        companyName: data.companyName || job?.companyName,
        companyLogo: image || job?.companyLogo,
        location: data.location || job?.location,
        website: data.website || job?.website,
        workPlaceType: data.workPlaceType || job?.workPlaceType,
        jobType: data.jobType || job?.jobType,
        jobDescription: data.jobDescription || job?.jobDescription,
      },
    };

    try {
      const res = await createJob(jobUpdatedData);
      if (res.data) {
        setIsModalOpen(false);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="lg:w-[700px]">
      <JForm onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 gap-4">
          <JInputs label="Job Title" name="jobTitle" type="text" />
          <JInputs label="Company Name" name="companyName" type="text" />
          <JInputs label="Location" name="location" type="text" />
          <JInputs label="Website" name="website" type="text" />
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mt-4">
          <JSelect selectItems={jobTypes} required={false} name="jobType" />
          <JSelect
            selectItems={workPlaceTypes}
            required={false}
            name="workPlaceType"
          />
          <div className="flex justify-center">
            <label
              className="flex justify-center lg:w-[250px] h-11 bg-gray-200 rounded-xl items-center gap-x-2 cursor-pointer"
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

        <div className="mt-2">
          <JQuill
            label="Description"
            name="jobDescription"
            className="h-[150px]"
          />
        </div>

        <Button className="mt-14" type="submit">
          {isLoading ? "Loading..." : "Post Job "}
        </Button>
      </JForm>
    </div>
  );
};

export default UpdateJobModalContent;
