import JForm from "@/app/components/Form/JForm";
import JInputs from "@/app/components/Form/JInputs";
import useUserInfo from "@/hook/User";
import { useUpdateUserProfileMutation } from "@/redux/api/Features/user/userApi";
import { Button } from "@nextui-org/button";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  setContactInfoModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContactInfoModalContent = ({ setContactInfoModalOpen }: TProps) => {
  const { userData } = useUserInfo();
  const [updateUserProfile] = useUpdateUserProfileMutation();

  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const userInfo = {
      id: userData?._id,
      data: {
        ...data,
      },
    };

    try {
      const res = await updateUserProfile(userInfo);
      if (res.data) {
        setContactInfoModalOpen(false);
        toast.success("Contact info updated successfully");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="lg:w-[600px]">
      <JForm onSubmit={onsubmit}>
        <div className="grid lg:grid-cols-2 gap-x-6 gap-y-2">
          <div>
            <JInputs label="Phone Number" name="phoneNumber" type="text" />
          </div>
          <div>
            <JInputs label="Tagline" name="info.tag" type="text" />
          </div>
          <div>
            <JInputs label="Website" name="info.website" type="text" />
          </div>
          <div>
            <JInputs label="Country/Region" name="info.country" type="text" />
          </div>
          <div>
            <JInputs label="City" name="info.city" type="text" />
          </div>
        </div>

        <div className="mt-4">
          <Button type="submit" className="">
            Save
          </Button>
        </div>
      </JForm>
    </div>
  );
};

export default ContactInfoModalContent;
