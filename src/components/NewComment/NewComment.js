import React, { useState } from "react";
import { auth, firestore } from "../Firebase";
import styles from "./NewComment.module.css";

export default function NewComment({ id }) {
  const [comment, setComment] = useState(null);
  const ref = firestore.collection("posts").doc(id);

  if (auth.currentUser) {
    const { uid, displayName, photoURL } = auth.currentUser;

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };

    const handlePostComment = async () => {
      await ref
        .get()
        .then(async function (doc) {
          const createdAt = new Date();
          const currentComments = doc.data().comments;
          const newComment = {
            comment,
            uid,
            user: displayName,
            userImage: photoURL,
            createdAt,
          };
          let comments = {};
          if (currentComments) {
            comments = [...currentComments, newComment];
          } else {
            comments = [newComment];
          }
          await ref.update({
            comments,
          });
          setComment(null);
          document.getElementById("comment-input").value = null;
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    return (
      <div className={styles["container"]}>
        <input
          id="comment-input"
          className={styles["input"]}
          onChange={handleCommentChange}
          type="text"
          placeholder="Add a comment..."
        />
        <button
          disabled={comment === null || comment.trim() === ""}
          className={styles["button"]}
          onClick={handlePostComment}
        >
          Post
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }
}
