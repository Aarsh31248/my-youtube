import { Link } from "react-router-dom";
import { formatNumber } from "../utils/formatNumber";

const WatchVideoCard = ({ video }) => {
  const { id, snippet, statistics } = video;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <Link to={`/watch?v=${id}`} className="flex gap-3 mb-3 sm:mb-4 w-full">
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="
          w-32 h-20
          sm:w-40 sm:h-24
          rounded-lg object-cover flex-shrink-0
        "
      />

      <div className="min-w-0">
        <p className="text-sm font-semibold leading-snug line-clamp-2">
          {title}
        </p>

        <p className="text-xs text-gray-600 mt-1 truncate">{channelTitle}</p>

        <p className="text-xs text-gray-500 truncate">
          {formatNumber(Number(statistics.viewCount))} views
        </p>
      </div>
    </Link>
  );
};

export default WatchVideoCard;
