import { useEffect, useState } from "react";
import { auth, firebase, db } from "../components/firebase";
function useAuth() {
  // const [error, setError] = useState(null);
  // const [currentUser, setCurrentUser] = useState();
  const [user, setUser] = useState(null);
  const [codeoutput, setCodeoutput] = useState();
  function signInWithGoogle() {
    return auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  function LogOut() {
    return firebase.auth().signOut();
  }

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        db.collection("users")
          .doc(user.uid)
          .set(
            {
              id: user.uid,
              name: user.displayName,
              email: user.email,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            },
            { merge: true }
          );
      } else setUser(false);
    });
  }, [user]);

  let userID = user && user.uid;

  useEffect(() => {
    return db
      .collection(`users`)
      .doc(`${userID}`)
      .get()
      .then((doc) => {
        try {
          if (doc) {
            return db
              .collection(`users/${doc.id}/CodeOutput`)
              .orderBy("timestamp", "desc")
              .onSnapshot((snap) => {
                const documents = [];
                snap.forEach((doc) =>
                  documents.push({
                    id: doc.id,
                    ...doc.data(),
                  })
                );
                setCodeoutput(documents);
              });
          } else return;
        } catch (e) {
          console.log(e);
        }
      });
  }, [userID]);

  return [signInWithGoogle, LogOut, user, userID, codeoutput];
}

export default useAuth;
