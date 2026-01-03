import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import WatchVideoCard from "./WatchVideoCard";

const WatchSuggestions = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="mt-4">
      <h2 className="font-semibold mb-3 text-lg">Suggested videos</h2>

      {videos.map((video) => (
        <WatchVideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default WatchSuggestions;
