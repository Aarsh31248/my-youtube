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
    <div className="px-10 mt-2 h-full">
      <div className="grid grid-cols-[1fr_380px] gap-6">
        <div>
          <iframe
            className="rounded-xl"
            width="100%"
            height="570"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>

          <VideoMetaInfo videoId={videoId} />
          <CommentsContainer />
        </div>

        <div>
          <LiveChat />
          <WatchSuggestions />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
