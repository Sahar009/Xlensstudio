// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyCJAEH5rMYtpuqJKASBYjMVlCFinMBPI",
  authDomain: "xlensvisual.firebaseapp.com",
  projectId: "xlensvisual",
  storageBucket: "xlensvisual.appspot.com",
  messagingSenderId: "544934327193",
  appId: "1:544934327193:web:95730a7df8817415b0d908",
  measurementId: "G-R8Z20BCY45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app,auth}