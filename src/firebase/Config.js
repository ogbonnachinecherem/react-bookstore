// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBwpOey4oM-ADUDue9RnB1dNTFdIW2ev_4",
  authDomain: "book-dd805.firebaseapp.com",
  projectId: "book-dd805",
  storageBucket: "book-dd805.appspot.com",
  messagingSenderId: "317239980030",
  appId: "1:317239980030:web:ef1823222d28efd0565aaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)