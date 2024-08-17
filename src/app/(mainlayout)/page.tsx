import AllPost from "./feed/components/AllPost";
import CreatePostUi from "./feed/components/CreatePostUi";

const HomePage = () => {
  return (
    <div className="px-6">
      <CreatePostUi />
      <AllPost />
    </div>
  );
};

export default HomePage;
