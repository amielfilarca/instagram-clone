import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["links"]}>
        <a
          className={styles["link"]}
          href="https://github.com/amielfilarca/instagram-clone"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
      <div className={styles["copyright"]}>
        © 2020 Instagram Clone by Amiel Filarca
      </div>
    </div>
  );
}
