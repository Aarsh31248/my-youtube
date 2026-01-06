import { useState } from "react";
import { commentsData } from "../../utils/commentsData";
import CommentList from "./CommentList";

const CommentsContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 px-3 sm:px-6 border border-gray-300 rounded-xl bg-gray-100 mb-6 py-3">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h1 className="font-semibold sm:text-xl">
          {commentsData.length} Comments
        </h1>

        <button
          className="text-gray-600 hover:text-black text-lg sm:hidden"
          aria-label="Toggle comments"
        >
          <i
            className={`fa-solid ${isOpen ? "fa-angle-up" : "fa-angle-down"}`}
          ></i>
        </button>
      </div>

      <div>
        <div className="hidden sm:block mt-4">
          <CommentList comments={commentsData} />
        </div>

        {isOpen && (
          <div className="block sm:hidden mt-4">
            <CommentList comments={commentsData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsContainer;
