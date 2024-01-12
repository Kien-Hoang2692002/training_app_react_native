// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// ref = reference to a "collection"
import {
  getDatabase,
  ref as firebaseDatabaseRef,
  set as firebaseSet,
  child,
  get,
  onValue,
} from "firebase/database";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSqs-X5R50HYKux-6BpBI92GdhdxwH8z0",
  authDomain: "tranningappreactnative.firebaseapp.com",
  databaseURL: "https://tranningappreactnative-default-rtdb.firebaseio.com",
  projectId: "tranningappreactnative",
  storageBucket: "tranningappreactnative.appspot.com",
  messagingSenderId: "329921532382",
  appId: "1:329921532382:web:a848ee79c2bcf541ae0d4f",
  measurementId: "G-FJTWX35EMZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseDatabase = getDatabase();

export {
  auth,
  firebaseDatabase,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  firebaseSet,
  firebaseDatabaseRef,
  sendEmailVerification,
  child,
  get,
  onValue, //reload when
};
