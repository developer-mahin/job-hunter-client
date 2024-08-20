import { cn } from "@/lib/utils";
import { Textarea } from "@nextui-org/input";
import { Controller, useFormContext } from "react-hook-form";

type TTextareaProps = {
  name: string;
  required?: boolean;
  placeholder?: string;
  label?: string;
  className?: string;
};

const JTextarea = ({
  label,
  name,
  className,
  placeholder,
  required,
}: TTextareaProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, ...field }, fieldState: { error } }) => (
        <>
          <Textarea
            {...field}
            value={value}
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
  );
};

export default JTextarea;
