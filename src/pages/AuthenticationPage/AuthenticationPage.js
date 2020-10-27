import React from "react";
import firebase, { auth } from "../../components/Firebase";
import logo from "../../assets/instagram-text.png";
import styles from "./AuthenticationPage.module.css";
import Footer from "../../components/Footer/Footer";

export default function AuthenticationPage() {
  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch((error) => window.alert(error));
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["form"]}>
          <img className={styles["logo"]} alt="logo" src={logo} />
          <button className={styles["button"]} onClick={handleSignIn}>
            Sign in with Google
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
