import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { Controller, useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";

type TInputProps = {
  name: string;
  label: string;
  className?: string;
};

const JQuill = ({ name, className, label }: TInputProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({
          field: { value, onChange, ...field },
          fieldState: { error },
        }) => (
          <>
            <Label className="text-gray-500 mb-3 text-sm font-medium">{label}</Label>
            <ReactQuill
              {...field}
              value={value}
              onChange={onChange}
              className={cn("max-w-full", className)}
            ></ReactQuill>
            <p className="text-red-500 text-sm my-1">{error?.message}</p>
          </>
        )}
      />
    </div>
  );
};

export default JQuill;
