// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp-I9UtQLC9m67IiYuIjNNtruqqNkHnt8",
  authDomain: "portfolio-17455.firebaseapp.com",
  projectId: "portfolio-17455",
  storageBucket: "portfolio-17455.appspot.com",
  messagingSenderId: "164896056546",
  appId: "1:164896056546:web:bcbf9c1bbd18993cd4aabb",
  measurementId: "G-2ETYHHZ05V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);