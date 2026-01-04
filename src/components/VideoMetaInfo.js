import { useEffect, useState } from "react";
import { formatNumber } from "../utils/formatNumber";

const VideoMetaInfo = ({ videoId }) => {
  const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    getVideoDetails();
  }, [videoId]);

  const getVideoDetails = async () => {
    const data = await fetch(`/.netlify/functions/videos?videoId=${videoId}`);
    const json = await data.json();
    const playingVideoInfo = json.items.filter((video) => video.id === videoId);
    setVideoInfo(playingVideoInfo[0]);
  };

  if (!videoInfo) return null;

  const { snippet, statistics } = videoInfo;

  return (
    <div className="mt-2">
      <h1 className="text-xl font-bold mb-3">{snippet.title}</h1>

      <div className="flex gap-28 items-center">
        <div className="flex items-center gap-4">
          <img
            className="h-10 w-10 rounded-full cursor-pointer"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt="channel"
          />

          <div>
            <p className="font-semibold">{snippet.channelTitle}</p>
            <p className="text-sm text-gray-500 font-semibold -mt-1">
              {formatNumber(Number(statistics.viewCount))} subscribers
            </p>
          </div>

          <button className="bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-gray-800">
            Subscribe
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
            <i className="fa-regular fa-thumbs-up"></i>
            <span>Like</span>
          </button>

          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
            <i className="fa-regular fa-thumbs-down"></i>
            <span>Dislike</span>
          </button>

          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
            <i className="fa-solid fa-share"></i>
            <span>Share</span>
          </button>

          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
            <i className="fa-regular fa-bookmark"></i>
            <span>Save</span>
          </button>

          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
            <i className="fa-solid fa-download"></i>
            <span>Download</span>
          </button>
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoMetaInfo;
