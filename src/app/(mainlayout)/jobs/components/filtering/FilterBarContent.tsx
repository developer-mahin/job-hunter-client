import PaginationSoluation from "@/app/components/Shared/PaginationSoluation";
import { useGetAllJobQuery } from "@/redux/api/Features/Job/jobApi";
import { setCurrentPage, setLimit } from "@/redux/api/Features/Job/jobSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const FilterBarContent = () => {
  const dispatch = useAppDispatch();
  const { currentPage, limit, searchTerm } = useAppSelector(
    (state) => state.job
  );

  const handleSetLimit = (newLimit: number) => {
    dispatch(setLimit(newLimit));
  };

  const handleSetCurrentPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const { data: jobs } = useGetAllJobQuery([
    {
      name: "limit",
      value: limit,
    },
    {
      name: "page",
      value: currentPage,
    },
    {
      name: "searchTerm",
      value: searchTerm,
    },
  ]);

  return (
    <div className="mt-10">
      <div>
        <PaginationSoluation
          totalPage={jobs?.meta?.totalPage}
          setLimit={handleSetLimit}
          setCurrentPage={handleSetCurrentPage}
        />
      </div>
    </div>
  );
};

export default FilterBarContent;
