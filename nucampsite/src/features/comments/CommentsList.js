import { selectCommentsByCampsiteId } from "./commentsSlice";
import { Col } from "reactstrap";
import Comment from "./Comment";

const CommentsList = ({ campsiteId }) => {
  const comments = selectCommentsByCampsiteId(campsiteId);

  if (comments && comments.length > 0) {
    return (
      <Col md="5">
        <h4>comments</h4>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </Col>
    );
  }
  return (
    <Col md="5" className="m-1">
      No comments yet
    </Col>
  );
};

export default CommentsList;
