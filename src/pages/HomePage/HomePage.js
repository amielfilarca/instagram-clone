import React from "react";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts";
import styles from "./HomePage.module.css";
import add from "../../assets/add.svg";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer";

export default function HomePage() {
  let history = useHistory();

  const handleAddButtonClick = () => {
    history.push("/new-post");
  };

  return (
    <div className={styles["container"]}>
      <Header />
      <div className={styles["posts"]}>
        <Posts />
      </div>
      <button onClick={handleAddButtonClick} className={styles["add-button"]}>
        <img className={styles["icon"]} alt="add" src={add} />
      </button>
      <Footer />
    </div>
  );
}
