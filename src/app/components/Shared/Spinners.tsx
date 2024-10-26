import { cn } from "@/lib/utils";
import { Spinner } from "@nextui-org/react";

type TSpinnersProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Spinners: React.FC<TSpinnersProps> = ({ className, size = "md" }) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Spinner color="success" size={size} />
    </div>
  );
};

export default Spinners;
