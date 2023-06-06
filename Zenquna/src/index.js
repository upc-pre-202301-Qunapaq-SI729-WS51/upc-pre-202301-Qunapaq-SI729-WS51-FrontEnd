// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWywcSsyadbNgyFSCRZ7O85NpE8EyeK_c",
  authDomain: "zenquna.firebaseapp.com",
  projectId: "zenquna",
  storageBucket: "zenquna.appspot.com",
  messagingSenderId: "856423244805",
  appId: "1:856423244805:web:be72eb0be5837f079ee86c",
  measurementId: "G-NEFCFKDS27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
