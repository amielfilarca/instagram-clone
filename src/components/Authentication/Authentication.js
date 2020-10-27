import firebase, { auth } from "../Firebase";
import React, { useState } from "react";

export default function Authentication() {
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged(
    function (user) {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    },
    function (error) {
      console.log(error);
    }
  );

  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch((error) => console.log(error));
  };

  const handleSignOut = () => {
    auth.signOut().catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Authentication</h2>
      {user && <img alt="User" src={user.photoURL} />}
      {user && <h3>{user.displayName} is signed in.</h3>}
      {!user && <button onClick={handleSignIn}>Sign in with Google</button>}
      {user && <button onClick={handleSignOut}>Sign out</button>}
    </div>
  );
}
