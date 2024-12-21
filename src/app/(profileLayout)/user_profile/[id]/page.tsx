import Container from "@/app/components/Shared/Container";
import SingleUserData from "./components/SingleUserProfile";

const UserProfilePage = () => {
  return (
    <Container>
      <div className="">
        <SingleUserData />
      </div>
    </Container>
  );
};

export default UserProfilePage;
