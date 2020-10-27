import React, { useEffect, useState } from "react";
import { auth, firestore } from "../Firebase";
import styles from "./LikeButton.module.css";
import FilledLikeIcon from "../../assets/like-filled.svg";
import LikeIcon from "../../assets/like.svg";

export default function LikeButton({ id, likedBy }) {
  let user = {};
  if (auth.currentUser) user = auth.currentUser;
  const { uid, displayName, photoURL } = user;
  const ref = firestore.collection("posts").doc(id);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const userAlreadyLiked = likedBy.filter((liker) => {
      return liker.uid === uid;
    });
    if (userAlreadyLiked.length > 0) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [likedBy, uid]);

  const handleLike = async () => {
    const updatedLikedBy = [
      ...likedBy,
      {
        uid,
        user: displayName,
        userImage: photoURL,
        createdAt: new Date(),
      },
    ];

    await ref.update({ likedBy: updatedLikedBy });
  };

  const handleRemoveLike = async () => {
    const updatedLikedBy = likedBy.filter((liker) => {
      return liker.uid !== uid;
    });

    await ref.update({ likedBy: updatedLikedBy });
  };

  return (
    <div>
      {liked && (
        <button className={styles["like-button"]} onClick={handleRemoveLike}>
          <img className={styles["icon"]} alt="Like" src={FilledLikeIcon} />
        </button>
      )}
      {!liked && (
        <button className={styles["like-button"]} onClick={handleLike}>
          <img className={styles["icon"]} alt="Like" src={LikeIcon} />
        </button>
      )}
    </div>
  );
}
