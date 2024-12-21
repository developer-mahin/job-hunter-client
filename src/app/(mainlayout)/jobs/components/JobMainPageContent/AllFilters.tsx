import FilterSidebar from "@/app/components/Shared/FilterSidebar";
import FilterBarContent from "../filtering/FilterBarContent";
import { TMeta } from "@/types";

type TAllFiltersProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  meta: TMeta;
};

const AllFilters: React.FC<TAllFiltersProps> = ({ isOpen, setIsOpen, meta }) => {
  return (
    <div>
      <FilterSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        directionRight={true}
        className="lg:w-[550px] bg-gray-400"
      >
        <FilterBarContent meta={meta}/>
      </FilterSidebar>
    </div>
  );
};

export default AllFilters;
