// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP90UEDVhKifXo-1qrsQD0f_kIf__ec1s",
  authDomain: "netflixgpt-4c8f4.firebaseapp.com",
  projectId: "netflixgpt-4c8f4",
  storageBucket: "netflixgpt-4c8f4.firebasestorage.app",
  messagingSenderId: "1067407249858",
  appId: "1:1067407249858:web:d4727f174da4916f8cc65b",
  measurementId: "G-QKPY6NK352",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
