import Container from "@/app/components/Shared/Container";
import JobLeftSidebar from "./components/JobLeftSideBar/JobLeftSidebar";
import JobMainPageContent from "./components/JobMainPageContent/JobMainPageContent";

const JobsPage = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 my-3 gap-x-5">
        <div className="col-span-5">
          <JobLeftSidebar />
        </div>
        <div className="col-span-7">
          <JobMainPageContent />
        </div>
      </div>
    </Container>
  );
};

export default JobsPage;
