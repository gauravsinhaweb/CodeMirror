import { useEffect, useState } from "react";
import { auth, firebase, db } from "../firebase/firebase";
function useAuth() {
  // const [error, setError] = useState(null);
  // const [currentUser, setCurrentUser] = useState();
  const [user, setUser] = useState(null);

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

  return [signInWithGoogle, LogOut, user, userID];
}

export default useAuth;
