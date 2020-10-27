import React, { useState } from "react";
import Comment from "./Comment";

export default function Comments({ comments }) {
  const [displayAll, setDisplayAll] = useState(false);

  const commentCount = comments ? comments.length : null;

  const handleViewAllComments = () => {
    setDisplayAll(!displayAll);
  };

  return (
    <div>
      {comments && comments.length > 1 && (
        <button onClick={handleViewAllComments}>
          View all {commentCount} comments
        </button>
      )}
      {displayAll &&
        comments &&
        comments.map((comment) => (
          <Comment key={comments.indexOf(comment)} comment={comment} />
        ))}
      {!displayAll && comments && comments.length > 0 && comments[0] && (
        <Comment comment={comments[0]} />
      )}
      {!displayAll && comments && comments.length > 2 && comments[1] && (
        <Comment comment={comments[1]} />
      )}
    </div>
  );
}
