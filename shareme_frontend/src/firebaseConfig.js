// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLDxlalsUdHpEXFttcepr8wMcHBE-40tk",
  authDomain: "shareme-e4c42.firebaseapp.com",
  projectId: "shareme-e4c42",
  storageBucket: "shareme-e4c42.appspot.com",
  messagingSenderId: "17958533747",
  appId: "1:17958533747:web:c82086bdd480087ff84806",
  measurementId: "G-GZMM2C3NPS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
