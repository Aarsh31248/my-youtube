import { useEffect, useState } from "react";
import WatchVideoCard from "./WatchVideoCard";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const WatchSuggestions = () => {
  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const getVideos = async () => {
    try {
      const res = await fetch("/.netlify/functions/videos");
      const json = await res.json();

      if (Array.isArray(json?.items)) {
        setVideos(json.items);
      } else {
        setVideos([]);
      }
    } catch (err) {
      setVideos([]);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="-mt-4">
      <h2 className="font-semibold mb-4 text-base sm:text-lg hidden sm:block">
        Suggested videos
      </h2>

      <div className="flex flex-col sm:hidden">
        {videos.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCard info={video} isMenuOpen={isMenuOpen} />
          </Link>
        ))}
      </div>

      <div className="hidden sm:block">
        {videos.map((video) => (
          <WatchVideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default WatchSuggestions;
