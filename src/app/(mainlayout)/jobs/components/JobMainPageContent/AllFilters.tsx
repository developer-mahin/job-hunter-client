import FilterSidebar from "@/app/components/Shared/FilterSidebar";
import FilterBarContent from "../filtering/FilterBarContent";

type TAllFiltersProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AllFilters: React.FC<TAllFiltersProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <FilterSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        directionRight={true}
        className="lg:w-[550px] bg-gray-400"
      >
        <FilterBarContent />
      </FilterSidebar>
    </div>
  );
};

export default AllFilters;
