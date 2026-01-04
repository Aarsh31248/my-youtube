import { Outlet, useLocation } from "react-router-dom";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  const location = useLocation();
  const isWatchPage = location.pathname === "/watch";

  return (
    <div className="flex-1 h-full overflow-y-auto" data-scroll-container>
      {!isWatchPage && <ButtonList />}
      <Outlet />
    </div>
  );
};

export default MainContainer;
