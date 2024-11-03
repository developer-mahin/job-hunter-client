import Spinners from "@/app/components/Shared/Spinners";
import { useGetMyProfileQuery } from "@/redux/api/Features/user/userApi";

const FollowersPage = () => {
  const { data, isLoading } = useGetMyProfileQuery({});

  if (isLoading) {
    return <Spinners className="h-[100vh]" />;
  }

  const userData = data?.data;

  return (
    <div>
      <h2>Welcome to the Page page</h2>
    </div>
  );
};

export default FollowersPage;
