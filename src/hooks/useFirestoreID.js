import { useEffect, useState } from "react";
import { firestore } from "../components/Firebase";

const useFirestoreID = (id) => {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = firestore.collection("posts").doc(id);
    const unsub = ref.onSnapshot(
      (snapshot) => {
        const data = snapshot.data();
        if (data) setPost(data);
      },
      (err) => {
        setError(err);
      }
    );
    return () => unsub();
  }, [id]);

  return { post, error };
};

export default useFirestoreID;
