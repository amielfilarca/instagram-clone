import React from "react";
import LikeButton from "../LikeButton";
import styles from "./Post.module.css";
import { fromUnixTime, formatDistanceToNow } from "date-fns";
import CommentIcon from "../../assets/comment.svg";
import useRouter from "../../hooks/useRouter";

function Image({ caption, url }) {
  return <img className={styles["media"]} alt={caption} src={url}></img>;
}

function Video({ url, type }) {
  return (
    <video className={styles["media"]} autoPlay loop>
      <source src={url} type={type} />
    </video>
  );
}

export default function Post({ post }) {
  const { caption, createdAt, id, url, user, userImage, type, likedBy } = post;
  const router = useRouter();

  const formatTimestamp = (seconds) => {
    return formatDistanceToNow(fromUnixTime(seconds), new Date());
  };

  return (
    <div className={styles["post"]}>
      {/image/g.test(type) && <Image caption={caption} url={url} />}
      {/video/g.test(type) && <Video url={url} type={type} />}
      <div className={styles["post-details"]}>
        <img className={styles["user-image"]} alt={user} src={userImage} />
        <div className={styles["details"]}>
          <p className={styles["uploader-name"]}>{user}</p>
          <p className={styles["time-posted"]}>
            {`${formatTimestamp(createdAt.seconds)} ago`}
          </p>
        </div>
        <div className={styles["actions"]}>
          <LikeButton
            className={styles["like-button"]}
            id={id}
            likedBy={likedBy}
          />
          <div>
            <button
              className={styles["comment-button"]}
              onClick={(e) => router.push(`/post/${id}`)}
            >
              <img className={styles["icon"]} alt="Comment" src={CommentIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
