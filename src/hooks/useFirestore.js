import { useEffect, useState } from "react";
import { firestore } from "../components/Firebase";

const useFirestore = (collection) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsub = firestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let documents = [];
        snapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setPosts(documents);
      });

    return () => unsub();
  }, [collection]);

  return { posts };
};

export default useFirestore;
