import JForm from "@/app/components/Form/JForm";
import JInputs from "@/app/components/Form/JInputs";
import JTextarea from "@/app/components/Form/JTextarea";
import useUserInfo from "@/hook/User";
import { useUpdateUserProfileMutation } from "@/redux/api/Features/user/userApi";
import { Button } from "@nextui-org/button";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  setPersonalInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const PersonalInfoUpdatedModalContent = ({ setPersonalInfoModal }: TProps) => {
  const { userData } = useUserInfo();
  const [updateUserProfile] = useUpdateUserProfileMutation();

  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const fullName = data.firstName + " " + data.lastName;

    const userInfo = {
      id: userData?._id,
      data: {
        name: fullName || userData?.name,
        ...data,
      },
    };

    try {
      const res = await updateUserProfile(userInfo);
      if (res.data) {
        setPersonalInfoModal(false);
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
            <JInputs label="First Name" name="firstName" type="text" />
          </div>
          <div>
            <JInputs label="Last Name" name="lastName" type="text" />
          </div>
          <div>
            <JInputs label="Education" name="education" type="text" />
          </div>
        </div>
        <div className="mt-2">
          <JTextarea
            name="headline"
            placeholder="Headline..."
            label="Headline"
            className="h-20"
          />
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

export default PersonalInfoUpdatedModalContent;
