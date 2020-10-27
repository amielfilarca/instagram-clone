import React from "react";
import Header from "../../components/Header";
import NewPost from "../../components/NewPost";
import Footer from "../../components/Footer";
import styles from "./NewPostPage.module.css";

export default function NewPostPage() {
  return (
    <div className={styles["container"]}>
      <div>
        <Header />
      </div>
      <div className={styles["new-post"]}>
        <NewPost />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
