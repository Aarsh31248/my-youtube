import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import ScrollToTop from "../utils/scrollToTop"; 
const Body = () => {
  return (
    <div className="flex h-[calc(100vh-64px)]">
      <ScrollToTop />
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
