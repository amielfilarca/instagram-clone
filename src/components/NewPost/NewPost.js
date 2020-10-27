import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, firestore, storage } from "../Firebase";
import styles from "./NewPost.module.css";

export default function NewPost() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState(null);
  const [error, setError] = useState(null);

  let history = useHistory();

  const types = [
    "image/jpeg",
    "image/png",
    "video/mp4",
    "video/webm",
    "video/ogg",
  ];

  const getFolderName = (fileType) => {
    switch (fileType) {
      case "image/jpeg":
        return "images";
      case "image/png":
        return "images";
      case "video/mp4":
        return "videos";
      case "video/webm":
        return "videos";
      case "video/ogg":
        return "videos";
      default:
        break;
    }
  };

  const handleFileChange = (event) => {
    if (types.includes(event.target.files[0].type)) {
      setError(null);
      setFile(event.target.files[0]);
    } else {
      setError(
        "Invalid file: Please select an image (jpeg/png) or a video (mp4/webm/ogg)."
      );
    }
  };

  const handleCaptionChange = (event) => {
    const caption = event.target.value;
    if (caption && caption.trim !== "") {
      setCaption(event.target.value);
    } else {
      setCaption(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file && types.includes(file.type)) {
      const folderName = getFolderName(file.type);
      const storageRef = storage.ref(folderName + "/" + file.name);
      const firestoreRef = firestore.collection("posts");
      const uploadTask = storageRef.put(file);
      uploadTask.on(
        "state_changed",
        function (snapshot) {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        function (error) {
          console.log(error);
        },
        async function () {
          const createdAt = new Date();
          const { uid, displayName, photoURL } = auth.currentUser;
          await uploadTask.snapshot.ref.getDownloadURL().then(function (url) {
            firestoreRef.add({
              url,
              caption,
              createdAt,
              uid,
              user: displayName,
              userImage: photoURL,
              type: file.type,
              comments: [],
              likedBy: [],
            });
          });
          history.push("/");
        }
      );
    }
  };

  return (
    <div className={styles["container"]}>
      <form
        className={styles["form"]}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className={styles["header"]}>
          <h1 className={styles["title"]}>New Post</h1>
        </div>
        <div className={styles["inputs"]}>
          <input
            className={styles["caption"]}
            onChange={handleCaptionChange}
            type="text"
            id="caption"
            placeholder="Write a caption..."
          />
          <input
            className={styles["file"]}
            onChange={handleFileChange}
            type="file"
            id="file"
          />
        </div>
        <input
          className={styles["share"]}
          type="submit"
          value="Share"
          disabled={error}
        />
      </form>
      {error && <h3>{error}</h3>}
    </div>
  );
}
