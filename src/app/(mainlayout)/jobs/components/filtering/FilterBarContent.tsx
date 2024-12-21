import PaginationSoluation from "@/app/components/Shared/PaginationSoluation";
import { setCurrentPage, setLimit } from "@/redux/api/Features/Job/jobSlice";
import { useAppDispatch } from "@/redux/hook";
import { TMeta } from "@/types";
import ExperienceLevel from "./ExperienceLevel";

type TFilterBarContent = {
  meta: TMeta;
};

const FilterBarContent: React.FC<TFilterBarContent> = ({ meta }) => {
  const dispatch = useAppDispatch();

  const handleSetLimit = (newLimit: number) => {
    dispatch(setLimit(newLimit));
  };

  const handleSetCurrentPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="mt-10">
      <ExperienceLevel />
      {meta?.totalPage > 1 && (
        <div>
          <PaginationSoluation
            totalPage={meta?.totalPage}
            setLimit={handleSetLimit}
            setCurrentPage={handleSetCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default FilterBarContent;
