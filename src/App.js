import React, { useState } from "react";
import { auth } from "./components/Firebase";
import HomePage from "./pages/HomePage";
import { Switch, Route, useHistory } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";
import PostPage from "./pages/PostPage/PostPage";
import NewPostPage from "./pages/NewPostPage";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  let history = useHistory();

  const unsub = auth.onAuthStateChanged(
    function (user) {
      if (user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
      return () => unsub();
    },
    function (error) {
      console.log(error);
    }
  );

  return (
    <div>
      <Switch>
        <Route exact path="/">
          {!isSignedIn && <AuthenticationPage />}
          {isSignedIn && <HomePage />}
        </Route>
        <Route path="/post/:id" children={<PostPage />} />
        <Route path="/new-post" children={<NewPostPage />} />
        <Route path="*">
          <div
            style={{
              textAlign: "center",
              marginTop: "250px",
            }}
          >
            <h1
              style={{
                marginTop: "25px",
                color: "#262626",
                fontSize: "2rem",
                fontWeight: "600",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'",
              }}
            >
              404: Page not found
            </h1>
            <button
              style={{
                cursor: "pointer",
                marginTop: "25px",
                outline: "none",
                border: "none",
                background: "none",
                color: "#0095f6",
                fontSize: "1rem",
                fontWeight: "600",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'",
              }}
              onClick={() => history.push("/")}
            >
              Go back
            </button>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
