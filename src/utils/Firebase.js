// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnzsagD_FKjxv2bn5VxGLChSyJw7Z-VKo",
  authDomain: "netflixgpt-clone-5ed19.firebaseapp.com",
  projectId: "netflixgpt-clone-5ed19",
  storageBucket: "netflixgpt-clone-5ed19.firebasestorage.app",
  messagingSenderId: "825036604388",
  appId: "1:825036604388:web:0a44bcaaf767bbb8fbfdf1",
  measurementId: "G-1MEEB2MQQF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
