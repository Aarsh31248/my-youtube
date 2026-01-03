const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start gap-2 text-sm">
      <img
        className="h-7 w-7 rounded-full flex-shrink-0"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />

      <div className="flex-1 min-w-0">
        <p className="text-gray-800 leading-snug">
          <span className="font-semibold text-gray-700 whitespace-nowrap mr-2">
            {name}
          </span>

          <span className="break-words whitespace-pre-wrap">{message}</span>
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
