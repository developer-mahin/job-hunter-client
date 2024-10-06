import MyNetworksMainContent from "./MyNetworksMainContent/MyNetworksMainContent";
import MyNetworksLeftBar from "./MyNetwroksLeftBar/MyNetworksLeftBar";

const MyNetworkPageWrapper = () => {
  return (
    <div className="grid grid-cols-12 lg:gap-x-6 gap-x-0 gap-y-2 mt-5">
      <div className="lg:col-span-3 col-span-12">
        <MyNetworksLeftBar />
      </div>
      <div className="lg:col-span-9 col-span-12">
        <MyNetworksMainContent />
      </div>
    </div>
  );
};

export default MyNetworkPageWrapper;
