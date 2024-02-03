// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGkT-xpURSUogiYJGXlsNQiIJhuqbjnWs",
  authDomain: "netflix-gpt-556dd.firebaseapp.com",
  projectId: "netflix-gpt-556dd",
  storageBucket: "netflix-gpt-556dd.appspot.com",
  messagingSenderId: "318374022373",
  appId: "1:318374022373:web:3f251c230b59e13a40180c",
  measurementId: "G-T1X40JD8RH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
