import React from "react";
import { useParams } from "react-router-dom";
import useFirestoreID from "../../hooks/useFirestoreID";
import NewComment from "../NewComment";
import styles from "./PostItem.module.css";
import {
  fromUnixTime,
  formatDistanceToNow,
  differenceInHours,
  differenceInMinutes,
  differenceInDays,
  differenceInSeconds,
} from "date-fns";
import LikeButton from "../LikeButton";
import CommentIcon from "../../assets/comment.svg";

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

export default function PostItem() {
  const { id } = useParams();
  const { post } = useFirestoreID(id);

  const formatTimestamp = (seconds) => {
    const date = fromUnixTime(seconds);
    const now = new Date();
    return `${formatDistanceToNow(date, now)} ago`;
  };

  const shortFormatTimeStamp = (seconds) => {
    const date = fromUnixTime(seconds);
    const now = new Date();
    const dayDifference = differenceInDays(now, date);

    if (dayDifference < 1) {
      const hourDifference = differenceInHours(now, date);
      if (hourDifference < 1) {
        const minuteDifference = differenceInMinutes(now, date);
        if (minuteDifference < 1) {
          const secondDifference = differenceInSeconds(now, date);
          if (secondDifference < 1) {
            return "just now";
          } else {
            return `${secondDifference}s`;
          }
        } else {
          return `${minuteDifference}m`;
        }
      } else {
        return `${hourDifference}h`;
      }
    } else {
      return `${dayDifference}d`;
    }
  };

  if (post && post.length !== 0) {
    const {
      caption,
      createdAt,
      url,
      user,
      userImage,
      type,
      comments,
      likedBy,
    } = post;

    return (
      <div className={styles["main-container"]}>
        <div className={styles["post-media"]}>
          {/image/g.test(type) && <Image caption={caption} url={url} />}
          {/video/g.test(type) && <Video url={url} type={type} />}
        </div>
        <div className={styles["post-details"]}>
          <div className={styles["header-border"]}>
            <div className={styles["header"]}>
              <img
                className={styles["user-image"]}
                alt={user}
                src={userImage}
              />
              <div className={styles["body"]}>
                <p className={styles["user-name"]}>{user}</p>
              </div>
            </div>
          </div>

          <div className={styles["comments"]}>
            {caption && (
              <div className={styles["caption"]}>
                <img
                  className={styles["user-image"]}
                  alt={user}
                  src={userImage}
                />
                <div className={styles["body"]}>
                  <div>
                    <p className={styles["user-name"]}>{user}</p>
                    <span className={styles["text"]}>{caption}</span>
                  </div>
                  <div className={styles["footer"]}>
                    <p className={styles["date"]}>
                      {shortFormatTimeStamp(createdAt.seconds)}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {comments &&
              comments.map((comment) => (
                <div
                  className={styles["comment"]}
                  key={comments.indexOf(comment)}
                >
                  <img
                    className={styles["user-image"]}
                    alt={comment.user}
                    src={comment.userImage}
                  />
                  <div className={styles["body"]}>
                    <div>
                      <p className={styles["user-name"]}>{comment.user}</p>
                      <span className={styles["text"]}>{comment.comment}</span>
                    </div>
                    <div className={styles["footer"]}>
                      <p className={styles["date"]}>
                        {shortFormatTimeStamp(comment.createdAt.seconds)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className={styles["post-details-footer"]}>
            <div className={styles["action-bar"]}>
              <LikeButton id={id} likedBy={likedBy} />
              <button
                onClick={() => {
                  const commentInput = document.getElementById("comment-input");
                  commentInput.focus();
                }}
                className={styles["comment-button"]}
              >
                <img
                  className={styles["icon"]}
                  alt="Comment"
                  src={CommentIcon}
                />
              </button>
            </div>
            {createdAt && (
              <p className={styles["post-details-footer-date"]}>
                {formatTimestamp(createdAt.seconds)}
              </p>
            )}
            <NewComment id={id} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
