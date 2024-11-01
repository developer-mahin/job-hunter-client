import PaginationSoluation from "@/app/components/Shared/PaginationSoluation";

const FilterBarContent = () => {
  return (
    <div className="mt-10">
      <div>
        <PaginationSoluation
          data={jobs?.length}
          currentPage={currentPage}
          setLimit={setLimit}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default FilterBarContent;
