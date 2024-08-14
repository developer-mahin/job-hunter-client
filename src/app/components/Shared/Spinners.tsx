import { cn } from "@/lib/utils";
import { Spinner } from "@nextui-org/react";

const Spinners = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Spinner label="Loading..." color="success" />
    </div>
  );
};

export default Spinners;
