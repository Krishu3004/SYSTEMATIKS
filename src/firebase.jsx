import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9cevwW01WNDtOkS5pgvLHrCYl9GJZ_qM",
  authDomain: "e-commerce-7868f.firebaseapp.com",
  projectId: "e-commerce-7868f",
  storageBucket: "e-commerce-7868f.appspot.com",
  messagingSenderId: "203765795692",
  appId: "1:203765795692:web:daa73ebde09ae5921fc149",
  measurementId: "G-51N5XBQPYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);