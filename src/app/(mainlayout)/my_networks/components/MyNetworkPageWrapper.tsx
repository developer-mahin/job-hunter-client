import MyNetworksMainContent from "./MyNetworksMainContent/MyNetworksMainContent";
import MyNetworksLeftBar from "./MyNetwroksLeftBar/MyNetworksLeftBar";

const MyNetworkPageWrapper = () => {
  return (
    <div className="grid grid-cols-12 gap-x-6 mt-5">
      <div className="col-span-3">
        <MyNetworksLeftBar />
      </div>
      <div className="col-span-9">
        <MyNetworksMainContent />
      </div>
    </div>
  );
};

export default MyNetworkPageWrapper;
