import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import { getRandomChat } from "../utils/liveChatData";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(addMessage(getRandomChat()));
    }, 700);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="h-[570px] flex flex-col border border-gray-300 rounded-xl bg-white mb-6">
      {/* Header */}
      <div className="px-4 py-3 border-b font-semibold">Live chat</div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 flex flex-col-reverse gap-2">
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} {...chat} />
        ))}
      </div>

      <form
        className="border-t px-3 py-2 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!liveMessage.trim()) return;

          dispatch(
            addMessage({
              name: "Aarsh Singh",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="flex-1 px-3 py-2 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          type="text"
          placeholder="Chat..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
