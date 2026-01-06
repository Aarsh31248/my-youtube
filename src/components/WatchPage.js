import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoMetaInfo from "./VideoMetaInfo";
import CommentsContainer from "./comments/CommentsContainer";
import LiveChat from "./LiveChat";
import WatchSuggestions from "./WatchSuggestions";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="px-3 sm:px-10 mt-2 h-full">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_380px] gap-4 sm:gap-6">
        
        <div>
          <div className="w-full aspect-video">
            <iframe
              className="w-full sm:h-[570px] h-full rounded-xl"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>

          <VideoMetaInfo videoId={videoId} />

          <div className="block sm:hidden mt-4">
            <LiveChat />
          </div>

          <CommentsContainer />
        </div>

        <div className="hidden sm:flex flex-col gap-4">
          <LiveChat />
          <WatchSuggestions />
        </div>

        <div className="block sm:hidden">
          <WatchSuggestions />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
