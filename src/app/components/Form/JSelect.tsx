import { cn } from "@/lib/utils";
import { TSelectItems } from "@/types";
import { Select, SelectItem } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  selectItems: TSelectItems[];
  required?: boolean;
  className?: string;
};

const JSelect = ({ name, selectItems, className, required }: TInputProps) => {
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
            <Select
              {...field}
              value={value}
              onChange={onChange}
              size="sm"
              label="Select one.."
              isRequired={required}
              fullWidth
              className={cn("w-full", className)}
            >
              {selectItems.map((items: TSelectItems) => (
                <SelectItem key={items.key} value={items.key}>
                  {items.label}
                </SelectItem>
              ))}
            </Select>
            <p className="text-red-500 text-sm my-1">{error?.message}</p>
          </>
        )}
      />
    </div>
  );
};

export default JSelect;
