import { useState } from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";

const CommentThread = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);

  const hasReplies = comment.replies?.length > 0;
  const hasMoreReplies = hasReplies && comment.replies.length > visibleCount;

  return (
    <div>
      <Comment data={comment} />

      {hasReplies && (
        <button
          onClick={() => setShowReplies(!showReplies)}
          className="text-sm text-blue-600 font-semibold ml-12 mt-1"
        >
          {showReplies
            ? "Hide replies"
            : `View ${comment.replies.length} replies`}
        </button>
      )}

      {showReplies && (
        <div className="ml-10 pl-4 border-l border-gray-300 mt-2">
          <CommentList comments={comment.replies.slice(0, visibleCount)} />

          {hasMoreReplies && (
            <button
              onClick={() => setVisibleCount((prev) => prev + 1)}
              className="text-sm text-blue-600 font-semibold mt-2"
            >
              View more replies
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CommentThread;
