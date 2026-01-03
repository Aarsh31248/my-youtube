const Comment = ({ data }) => {
  const { name, text, time, likes } = data;

  return (
    <div className="flex gap-3 mt-4">
      <img
        className="h-10 w-10 rounded-full cursor-pointer"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />

      <div>
        <p className="text-sm font-semibold">
          @{name}
          <span className="text-gray-500 font-normal ml-2">{time}</span>
        </p>

        <p className="text-sm mt-1">{text}</p>

        <div className="flex items-center gap-4 mt-2 text-gray-600 text-sm">
          <span className="cursor-pointer hover:text-black"><i className="fa-regular fa-thumbs-up"></i> {likes}</span>
          <span className="cursor-pointer hover:text-black">Reply</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
