import CommentThread from "./CommentThread";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <CommentThread key={index} comment={comment} />
  ));
};

export default CommentList;
