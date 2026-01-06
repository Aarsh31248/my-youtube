import { Outlet, useLocation } from "react-router-dom";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  const location = useLocation();
  const isWatchPage = location.pathname === "/watch";

  return (
    <div className="flex-1 overflow-y-auto h-full" data-scroll-container>
      {!isWatchPage && (
        <div className="sticky top-0 z-10 bg-white">
          <ButtonList />
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default MainContainer;
