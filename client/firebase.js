import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCjF1NGOgCvc4YgRvvLH-pSGaJGsCPudIM",
    authDomain: "codemirror-fe6c6.firebaseapp.com",
    projectId: "codemirror-fe6c6",
    storageBucket: "codemirror-fe6c6.appspot.com",
    messagingSenderId: "107284799580",
    appId: "1:107284799580:web:c11a0773338933e276c699",
    measurementId: "G-7PRWQYWSF6"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire;