import { useEffect, useState, useCallback } from "react";
import { formatNumber } from "../utils/formatNumber";

const VideoMetaInfo = ({ videoId }) => {
  const [videoInfo, setVideoInfo] = useState(null);

  const getVideoDetails = useCallback(async () => {
    const data = await fetch(`/.netlify/functions/videos?videoId=${videoId}`);
    const json = await data.json();
    setVideoInfo(json.items?.[0]);
  }, [videoId]);

  useEffect(() => {
    getVideoDetails();
  }, [getVideoDetails]);

  if (!videoInfo) return null;

  const { snippet, statistics } = videoInfo;

  return (
    <div className="mt-3 sm:-mt-1">
      <h1 className="text-base sm:text-xl font-bold mb-3">{snippet.title}</h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-24 sm:-mt-1">
        <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-4">
          <div className="flex items-center gap-3">
            <img
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full cursor-pointer"
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
              alt="channel"
            />

            <div>
              <p className="font-semibold text-sm sm:text-base">
                {snippet.channelTitle}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 font-semibold -mt-1">
                {formatNumber(Number(statistics.viewCount))} subscribers
              </p>
            </div>
          </div>

          <button className="bg-black text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full font-semibold hover:bg-gray-800 text-sm sm:text-base">
            Subscribe
          </button>
        </div>

        <div className="flex gap-2 mt-3 sm:mt-0 overflow-x-auto scrollbar-hide">
          <button className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 text-sm sm:text-lg whitespace-nowrap">
            <i className="fa-regular fa-thumbs-up"></i>
            Like
          </button>

          <button className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 text-sm sm:text-lg whitespace-nowrap">
            <i className="fa-regular fa-thumbs-down"></i>
            Dislike
          </button>

          <button className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 text-sm sm:text-lg whitespace-nowrap">
            <i className="fa-solid fa-share"></i>
            Share
          </button>

          <button className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 text-sm sm:text-lg whitespace-nowrap">
            <i className="fa-regular fa-bookmark"></i>
            Save
          </button>

          <button className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 text-sm sm:text-lg whitespace-nowrap">
            <i className="fa-solid fa-download"></i>
            Download
          </button>

          <button className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 text-sm sm:text-lg">
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoMetaInfo;
