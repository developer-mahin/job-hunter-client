import { quillFormats, quillModules } from "@/app/(mainlayout)/jobs/data/quill";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import dynamic from "next/dynamic";
import { Controller, useFormContext } from "react-hook-form";
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

type TInputProps = {
  name: string;
  label?: string;
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
            <Label className="text-gray-500 mb-3 text-sm font-medium">
              {label}
            </Label>
            <QuillEditor
              {...field}
              value={value}
              onChange={onChange}
              modules={quillModules}
              formats={quillFormats}
              className={cn("max-w-full", className)}
            ></QuillEditor>
            <p className="text-red-500 text-sm my-1">{error?.message}</p>
          </>
        )}
      />
    </div>
  );
};

export default JQuill;
