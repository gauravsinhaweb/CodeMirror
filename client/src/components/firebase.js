import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// const APIKEY = process.env.API_KEY;

const firebaseConfig = {
  apiKey: "AIzaSyCjF1NGOgCvc4YgRvvLH-pSGaJGsCPudIM",
  authDomain: "codemirror-fe6c6.firebaseapp.com",
  projectId: "codemirror-fe6c6",
  storageBucket: "codemirror-fe6c6.appspot.com",
  messagingSenderId: "107284799580",
  appId: "1:107284799580:web:c11a0773338933e276c699",
  measurementId: "G-7PRWQYWSF6",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

// firebase.firestore().enablePersistence()
const auth = firebase.auth();

export { firebase, db, auth };
