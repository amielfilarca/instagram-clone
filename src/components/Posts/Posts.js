import React from "react";
import useFirestore from "../../hooks/useFirestore";
import Post from "./Post";
import styles from "./Posts.module.css";

export default function Posts() {
  const { posts } = useFirestore("posts");

  return (
    <div className={styles.posts}>
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
}
