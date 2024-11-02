import { useAppSelector } from "@/redux/hook";
import { Button, Pagination, Select, SelectItem } from "@nextui-org/react";
import React from "react";

type TPaginationSoluationProps = {
  totalPage: number;
  setCurrentPage: (
    value: number
  ) => void | React.Dispatch<React.SetStateAction<number>>;
  setLimit: (
    value: number
  ) => void | React.Dispatch<React.SetStateAction<number>>;
};

const PaginationSoluation: React.FC<TPaginationSoluationProps> = ({
  totalPage,
  setCurrentPage,
  setLimit,
}) => {
  const { currentPage, limit } = useAppSelector((state) => state.job);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mt-4 flex gap-x-6">
      <div className="flex flex-col gap-5 ">
        <Pagination
          total={totalPage}
          page={currentPage}
          onChange={setCurrentPage}
        />
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
            disabled={currentPage >= totalPage}
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

    // <div className="flex justify-center items-center space-x-2 mt-4">
    //   <button
    //     onClick={() => setCurrentPage(currentPage - 1)}
    //     disabled={currentPage === 1}
    //     className="px-3 py-1 rounded-md text-gray-600 hover:text-white bg-gray-100 hover:bg-blue-500 transition-colors disabled:opacity-50"
    //   >
    //     Previous
    //   </button>

    //   {getPaginationNumbers().map((page) => (
    //     <button
    //       key={page}
    //       onClick={() => setCurrentPage(page)}
    //       className={`px-3 py-1 rounded-md ${
    //         page === currentPage
    //           ? "bg-blue-500 text-white"
    //           : "bg-gray-100 text-gray-600 hover:text-white hover:bg-blue-500"
    //       } transition-colors`}
    //     >
    //       {page}
    //     </button>
    //   ))}

    //   <button
    //     onClick={() => setCurrentPage(currentPage + 1)}
    //     disabled={currentPage === totalPages}
    //     className="px-3 py-1 rounded-md text-gray-600 hover:text-white bg-gray-100 hover:bg-blue-500 transition-colors disabled:opacity-50"
    //   >
    //     Next
    //   </button>

    //   <button
    //     onClick={() => setCurrentPage(totalPages)}
    //     disabled={currentPage === totalPages}
    //     className="px-3 py-1 rounded-md text-gray-600 hover:text-white bg-gray-100 hover:bg-blue-500 transition-colors disabled:opacity-50"
    //   >
    //     Last
    //   </button>
    // </div>
  );
};

export default PaginationSoluation;
