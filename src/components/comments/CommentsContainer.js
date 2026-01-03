import { commentsData } from "../../utils/commentsData";
import CommentList from "./CommentList";

const CommentsContainer = () => {
  return (
    <div className="mt-6 px-6">
      <h1 className="font-bold text-xl mb-4">{commentsData.length} Comments</h1>

      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
