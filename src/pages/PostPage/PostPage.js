import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PostItem from "../../components/PostItem/PostItem";
import styles from "./PostPage.module.css";

export default function PostPage() {
  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <Header />
      </div>
      <div className={styles["post"]}>
        <PostItem />
      </div>
      <div className={styles["footer"]}>
        <Footer />
      </div>
    </div>
  );
}
