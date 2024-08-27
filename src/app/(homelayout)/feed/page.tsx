import AllPost from "./components/post/AllPost";
import CreatePostUi from "./components/post/CreatePostUi";

const FeedPage = () => {
  return (
    <div className="lg:px-6 mt-4 md:mt-0">
      <CreatePostUi/>
      <AllPost />
    </div>
  );
};

export default FeedPage;
