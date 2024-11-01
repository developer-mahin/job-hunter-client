import { Button, Pagination, Select, SelectItem } from "@nextui-org/react";
import React from "react";

type TPaginationSoluationProps = {
  data: number;
  currentPage: number;
  setCurrentPage: (
    value: number
  ) => void | React.Dispatch<React.SetStateAction<number>>;
  setLimit: (
    value: number
  ) => void | React.Dispatch<React.SetStateAction<number>>;
};

const PaginationSoluation: React.FC<TPaginationSoluationProps> = ({
  data,
  currentPage,
  setCurrentPage,
  setLimit,
}) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < data) {
      setCurrentPage(currentPage + 1);
    }
  };

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
            onClick={() => handlePreviousPage}
          >
            Previous
          </Button>
          <Button
            size="sm"
            variant="flat"
            color="secondary"
            disabled={currentPage >= data}
            onClick={() => handleNextPage}
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
