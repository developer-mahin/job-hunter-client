import { cn } from "@/lib/utils";
import { TSelectItems } from "@/types";
import React, { useState } from "react";

interface CheckboxProps {
  onChangeFunction: (value: string) => void;
  data: TSelectItems[];
  className?: string;
}

const CheckBox: React.FC<CheckboxProps> = ({
  onChangeFunction,
  data,
  className,
}) => {
  const [value, setValue] = useState<string>("");

  return (
    <div className={cn(className, "grid gap-y-2 gap-x-4")}>
      {data.map((item, i) => (
        <div key={i} className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            value={item.key}
            checked={item.key === value}
            onChange={(e) => {
              setValue(e.target.value);
              onChangeFunction(e.target.value);
            }}
            className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
          />
          <label className="cursor-pointer">
            <span className="text-gray-700">{item.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
