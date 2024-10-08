import Container from "@/app/components/Shared/Container";
import Activities from "./components/Activities/Activities";
import ProfileData from "./components/ProfileData";
import RightSidebar from "@/app/components/Shared/RightSidebar";

const ProfilePage = () => {
  return (
    <Container>
      <div className="flex flex-wrap py-3">
        <div className="w-full md:w-3/4 p-0 lg:p-2">
          <ProfileData />
          <Activities />
        </div>
        <div className="w-full md:w-1/4 p-0 lg:p-2 mt-3 md:mt-0 lg:block hidden">
          <RightSidebar />
        </div>
      </div>
    </Container>
  );
};

export default ProfilePage;
