import React from "react";

export default function Comment({ comment }) {
  const { user, userImage } = comment;
  return (
    <div>
      <img alt={user} src={userImage} />
      <p>{comment.comment}</p>
    </div>
  );
}
