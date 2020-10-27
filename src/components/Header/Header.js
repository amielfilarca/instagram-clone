import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/instagram-text.png";
import home from "../../assets/home.svg";
import { auth } from "../Firebase";
import search from "../../assets/search-filled.svg";
import { useHistory } from "react-router-dom";

export default function Header() {
  let user = {};
  if (auth.currentUser) user = auth.currentUser;
  const { photoURL } = user;
  let history = useHistory();
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.matches("#logout")) {
        handleLogOut();
      } else if (!event.target.matches("#avatar")) {
        setDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleHomeClick = () => {
    history.push("/");
  };

  const handleAvatarClick = () => {
    setDropdown(true);
  };

  const handleLogOut = () => {
    auth.signOut().catch((error) => console.log(error));
  };

  return (
    <div className={styles["header"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["left"]}>
          <button onClick={handleHomeClick} className={styles["logo-button"]}>
            <img className={styles["logo"]} alt="logo" src={logo} />
          </button>
        </div>
        <div className={styles["center"]}>
          <img className={styles["search"]} alt="search" src={search} />
          <input className={styles["input"]} type="text" placeholder="Search" />
        </div>
        <div className={styles["right"]}>
          <button onClick={handleHomeClick} className={styles["button"]}>
            <img className={styles["icon"]} alt="home" src={home} />
          </button>
          <button
            onClick={handleAvatarClick}
            className={styles["avatar-button"]}
          >
            <img
              id="avatar"
              className={styles["avatar"]}
              alt="user"
              src={photoURL}
            />
          </button>
          {dropdown && (
            <div className={styles["dropdown"]}>
              <button disabled className={styles["dropdown-item"]}>
                Profile
              </button>
              <button disabled className={styles["dropdown-item"]}>
                Settings
              </button>
              <button
                onClick={handleLogOut}
                className={styles["dropdown-item"]}
                id="logout"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
