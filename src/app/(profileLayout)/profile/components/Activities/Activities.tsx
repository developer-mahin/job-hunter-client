import { useGetMyPostsQuery } from "@/redux/api/Features/Post/postApi";
import { TPost } from "@/types";
import ActivitiesPostCard from "./ActivitiesPostCard";
import Spinners from "@/app/components/Shared/Spinners";

const Activities = () => {
  const { data: myPosts, isLoading } = useGetMyPostsQuery({});

  if (isLoading) {
    return <Spinners />;
  }

  return (
    <div>
      {myPosts?.slice(0, 3)?.map((post: TPost) => (
        <ActivitiesPostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Activities;
