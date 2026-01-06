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
      className={`p-1 m-2 hover:shadow-lg rounded-xl hover:bg-gray-200 cursor-pointer
        transition-all duration-300 ease-out hover:scale-[1.01]
        ${isMenuOpen ? "w-[400px]" : "w-[480px]"}`}
    >
      <img
        src={thumbnails?.maxres?.url || thumbnails?.high?.url}
        alt="thumbnail"
        className="rounded-xl"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      <ul className="ml-5 mt-1">
        <li className="relative font-bold pr-6">
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
