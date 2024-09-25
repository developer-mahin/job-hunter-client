import RightSidebar from "@/app/components/Shared/RightSidebar";
import SingleUserData from "./components/SingleUserProfile";
import Container from "@/app/components/Shared/Container";

const UserProfilePage = () => {
  return (
    <Container>
      <div className="mt-10 flex flex-wrap py-3">
        <div className="w-full md:w-3/4 p-0 lg:p-2">
          <SingleUserData />
        </div>
        <div className="w-full md:w-1/4 p-0 lg:p-2 mt-3 md:mt-0 lg:block hidden">
          <RightSidebar />
        </div>
      </div>
    </Container>
  );
};

export default UserProfilePage;
