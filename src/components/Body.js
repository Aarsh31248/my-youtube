import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex h-[calc(100vh-64px)]">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
