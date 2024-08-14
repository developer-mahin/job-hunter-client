import AllPost from "./components/AllPost";
import CreatePostUi from "./components/CreatePostUi";

const FeedPage = () => {
  return (
    <div className="px-6">
      <CreatePostUi />
      <AllPost />
    </div>
  );
};

export default FeedPage;
