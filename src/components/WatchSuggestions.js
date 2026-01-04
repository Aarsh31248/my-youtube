import { useEffect, useState } from "react";
import WatchVideoCard from "./WatchVideoCard";

const WatchSuggestions = () => {
  const [videos, setVideos] = useState([]);

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
    <div className="mt-4">
      <h2 className="font-semibold mb-3 text-lg">Suggested videos</h2>

      {Array.isArray(videos) &&
        videos.map((video) => <WatchVideoCard key={video.id} video={video} />)}
    </div>
  );
};

export default WatchSuggestions;
