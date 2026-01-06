import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const getVideos = async () => {
    const data = await fetch("/.netlify/functions/videos");
    const json = await data.json();

    const validVideos = (json.items || []).filter(
      (video) =>
        typeof video.id === "string" &&
        (video.snippet?.thumbnails?.maxres?.url ||
          video.snippet?.thumbnails?.high?.url) &&
        video.statistics?.viewCount
    );

    setVideos(validVideos);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div
      className={`
        sm:ml-4
        mx-auto
        flex flex-wrap justify-start
        ${isMenuOpen ? "max-w-[1320px]" : "max-w-[1560px]"}
      `}
    >
      {videos.map((video) => (
        <Link
          key={video.id}
          to={`/watch?v=${video.id}`}
          className="w-full sm:w-auto"
        >
          <VideoCard info={video} isMenuOpen={isMenuOpen} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
