import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  label: string;
  className?: string;
  labelClass?: string;
};

const JInputs = ({
  type,
  name,
  placeholder,
  required,
  label,
  labelClass,
  className,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, ...field }, fieldState: { error } }) => (
        <>
          <Label
            className={cn(
              "block text-gray-700 text-sm font-bold mb-2",
              labelClass
            )}
          >
            {label}
          </Label>
          <Input
            {...field}
            value={value}
            type={type}
            placeholder={placeholder}
            className={cn(
              "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
              className
            )}
          />
          <p className="text-red-500 text-sm my-1">{error?.message}</p>
        </>
      )}
    />
  );
};

export default JInputs;
