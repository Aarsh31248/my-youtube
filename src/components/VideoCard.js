import { formatNumber } from "../utils/formatNumber";

const VideoCard = ({ info, isMenuOpen }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;

  if (!thumbnails?.high && !thumbnails?.maxres) return null;
  if (!statistics?.viewCount) return null;

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div
      className={`
        p-1 my-2 sm:m-2 rounded-xl cursor-pointer
        hover:shadow-lg hover:bg-gray-200
        transition-all duration-300 ease-out hover:scale-[1.01]

        w-full sm:w-auto
        ${isMenuOpen
          ? "sm:basis-[400px] sm:max-w-[400px]"
          : "sm:basis-[480px] sm:max-w-[480px]"}
      `}
    >
      <img
        src={thumbnails?.maxres?.url || thumbnails?.high?.url}
        alt="thumbnail"
        className="rounded-xl w-full"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      <ul className="ml-5 mt-1">
        <li className="relative font-bold pr-6 line-clamp-2 break-words">
          {title}
          <i className="fa-solid fa-ellipsis-vertical absolute right-0 top-1"></i>
        </li>

        <li className="font-semibold">
          {channelTitle} <i className="fa-solid fa-circle-check"></i>
        </li>

        <li className="text-sm text-gray-600">
          {formatNumber(Number(statistics.viewCount))} • {formattedDate}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
