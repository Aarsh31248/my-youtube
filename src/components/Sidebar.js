import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const [showYou, setShowYou] = useState(true);
  const [showExplore, setShowExplore] = useState(true);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const location = useLocation();

  const isWatchPage = location.pathname === "/watch";

  if (!isMenuOpen) return null;

  return (
    <>
      {isWatchPage && (
        <div className="fixed inset-0 bg-black/40 z-40"></div>
      )}

      <div
        className={`
          p-5 bg-white shadow-lg overflow-y-auto scrollbar-hide z-50
          w-[70%] max-w-[260px] sm:w-60

          ${
            isWatchPage
              ? "fixed top-[64px] left-0 h-[calc(100vh-64px)]"
              : "fixed top-[64px] left-0 h-[calc(100vh-64px)] sm:static sm:h-full"
          }
        `}
      >
        <ul className="font-semibold ml-2 [&>li:hover]:text-gray-700 [&>li:hover]:text-lg [&>li]:pb-2 cursor-pointer">
          <li>
            <Link to={"/"}>
              <i className="fa-solid fa-house mr-2"></i> Home
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-video mr-2"></i> Shorts
          </li>
          <li>
            <i className="fa-solid fa-clapperboard mr-2"></i> Subscriptions
          </li>
          <li>
            <i className="fa-solid fa-life-ring mr-2"></i> Live
          </li>
        </ul>

        <p className="h-[1.5px] bg-gray-300 mt-3"></p>

        <button
          onClick={() => setShowYou(!showYou)}
          className="w-full flex justify-between items-center font-bold pt-5 text-lg sm:text-[23px]"
        >
          <span>You</span>
          <i
            className={`fa-solid ${
              showYou ? "fa-angle-down" : "fa-angle-right"
            } text-xl`}
          ></i>
        </button>

        {showYou && (
          <ul className="mt-2 ml-2 text-sm sm:text-base [&>li:hover]:text-gray-900 [&>li:hover]:font-semibold [&>li]:pb-2 cursor-pointer">
            <li><i className="fa-solid fa-clock-rotate-left mr-2"></i> History</li>
            <li><i className="fa-brands fa-google-play mr-2"></i> Playlist</li>
            <li><i className="fa-solid fa-clock mr-2"></i> Watch Later</li>
            <li><i className="fa-solid fa-thumbs-up mr-2"></i> Liked Videos</li>
            <li><i className="fa-solid fa-down-long mr-2"></i> Downloads</li>
          </ul>
        )}

        <p className="h-[1.5px] bg-gray-300 mt-3"></p>

        <button
          onClick={() => setShowExplore(!showExplore)}
          className="w-full flex justify-between items-center font-bold pt-5 text-lg sm:text-[23px]"
        >
          <span>Explore</span>
          <i
            className={`fa-solid ${
              showExplore ? "fa-angle-down" : "fa-angle-right"
            } text-xl`}
          ></i>
        </button>

        {showExplore && (
          <ul className="mt-2 ml-2 text-sm sm:text-base [&>li:hover]:text-gray-900 [&>li:hover]:font-semibold [&>li]:pb-2 cursor-pointer">
            <li><i className="fa-solid fa-music mr-2"></i> Music</li>
            <li><i className="fa-solid fa-gamepad mr-2"></i> Gaming</li>
            <li><i className="fa-solid fa-newspaper mr-2"></i> News</li>
            <li><i className="fa-solid fa-trophy mr-2"></i> Sports</li>
            <li><i className="fa-solid fa-film mr-2"></i> Movies</li>
            <li><i className="fa-solid fa-graduation-cap mr-2"></i> Courses</li>
            <li><i className="fa-solid fa-cart-shopping mr-2"></i> Shopping</li>
            <li><i className="fa-solid fa-vest-patches mr-2"></i> Fashion</li>
          </ul>
        )}
      </div>
    </>
  );
};

export default SideBar;
