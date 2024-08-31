// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_ktynI9SqpynFCfLf02KnYJxoISd2OoQ",
  authDomain: "netflixgpt-9dafb.firebaseapp.com",
  projectId: "netflixgpt-9dafb",
  storageBucket: "netflixgpt-9dafb.appspot.com",
  messagingSenderId: "370993271040",
  appId: "1:370993271040:web:4c8db0b2c0ad3c842023e5",
  measurementId: "G-L95XXFDDN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();