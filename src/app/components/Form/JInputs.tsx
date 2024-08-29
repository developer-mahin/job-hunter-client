import { cn } from "@/lib/utils";
import { Input } from "@nextui-org/input";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  label: string;
  className?: string;
};

const JInputs = ({
  type,
  name,
  placeholder,
  required,
  label,
  className,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, ...field }, fieldState: { error } }) => (
          <>
            <Input
              {...field}
              value={value}
              type={type}
              placeholder={placeholder}
              label={label}
              fullWidth
              isRequired={required}
              className={cn("h-11 rounded-md", className)}
            />
            <p className="text-red-500 text-sm my-1">{error?.message}</p>
          </>
        )}
      />
    </div>
  );
};

export default JInputs;
