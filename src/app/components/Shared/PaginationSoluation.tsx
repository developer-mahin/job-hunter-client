import { TJob, TUser } from "@/types";
import { Button, Pagination, Select, SelectItem } from "@nextui-org/react";
import React from "react";

type TPaginationSoluationProps = {
  data: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
};

const PaginationSoluation: React.FC<TPaginationSoluationProps> = ({
  data,
  currentPage,
  setCurrentPage,
  setLimit,
}) => {
  return (
    <div className="mt-4 flex gap-x-6">
      <div className="flex flex-col gap-5 ">
        <Pagination total={data} page={currentPage} onChange={setCurrentPage} />
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="flat"
            color="secondary"
            disabled={currentPage <= 1}
            onClick={() =>
              setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
            }
          >
            Previous
          </Button>
          <Button
            size="sm"
            variant="flat"
            color="secondary"
            disabled={currentPage >= data}
            onClick={() =>
              setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))
            }
          >
            Next
          </Button>
        </div>
      </div>

      <div>
        <Select
          onChange={(e) => setLimit(Number(e.target.value))}
          size="md"
          fullWidth
          className="w-20"
        >
          <SelectItem key={5} value="5">
            5
          </SelectItem>
          <SelectItem key={10} value="10">
            10
          </SelectItem>
          <SelectItem key={15} value="15">
            15
          </SelectItem>
        </Select>
      </div>
    </div>
  );
};

export default PaginationSoluation;
