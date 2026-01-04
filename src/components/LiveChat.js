import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, toggleChat } from "../redux/chatSlice";
import { getRandomChat } from "../utils/liveChatData";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const isChatOpen = useSelector((store) => store.chat.isChatOpen);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(addMessage(getRandomChat()));
    }, 700);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  if (!isChatOpen) {
    return (
      <div
        className="border border-gray-300 rounded-xl bg-white mb-6 px-4 py-3 flex justify-between items-center cursor-pointer"
        onClick={() => dispatch(toggleChat())}
      >
        <span className="font-semibold">Live chat</span>
        <span className="text-gray-500 hover:text-black text-lg">
          <i className="fa-solid fa-angle-down"></i>
        </span>
      </div>
    );
  }

  return (
    <div className="h-[570px] flex flex-col border border-gray-300 rounded-xl bg-white mb-6">
      <div className="px-4 py-3 border-b font-semibold flex justify-between items-center">
        <span>Live chat</span>

        <button
          onClick={() => dispatch(toggleChat())}
          className="text-gray-700 hover:text-black text-lg"
          aria-label="Close chat"
        >
          ✕
        </button>
      </div>

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
