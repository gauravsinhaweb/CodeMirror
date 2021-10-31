import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// const APIKEY = process.env.API_KEY;

const firebaseConfig = {
  apiKey: "AIzaSyCgYOKOuH8AlRGxexWq2oCv4vBpHfZL01k",
  authDomain: "auth-development-1888f.firebaseapp.com",
  databaseURL: "https://auth-development-1888f-default-rtdb.firebaseio.com",
  projectId: "auth-development-1888f",
  storageBucket: "auth-development-1888f.appspot.com",
  messagingSenderId: "834361534333",
  appId: "1:834361534333:web:61c1638c95e7322a898e14",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

// firebase.firestore().enablePersistence()
const auth = firebase.auth();

export { firebase, db, auth };
