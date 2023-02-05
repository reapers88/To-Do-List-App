// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// var firebaseConfig = {
//   apiKey: "AIzaSyC3HCCswsyHjUILQWdorH1t9Zy8vFjME0M",
//   authDomain: "to-do-list-32063.firebaseapp.com",
//   databaseURL: "https://to-do-list-32063-default-rtdb.firebaseio.com",
//   projectId: "to-do-list-32063",
//   storageBucket: "to-do-list-32063.appspot.com",
//   messagingSenderId: "430078948673",
//   appId: "1:430078948673:web:c264d90427543d7a779dc0",
//   measurementId: "${config.measurementId}",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// var db = firebase.firestore();



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3HCCswsyHjUILQWdorH1t9Zy8vFjME0M",
  authDomain: "to-do-list-32063.firebaseapp.com",
  databaseURL: "https://to-do-list-32063-default-rtdb.firebaseio.com",
  projectId: "to-do-list-32063",
  storageBucket: "to-do-list-32063.appspot.com",
  messagingSenderId: "430078948673",
  appId: "1:430078948673:web:c264d90427543d7a779dc0",
  measurementId: "G-7C8P25FHPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

