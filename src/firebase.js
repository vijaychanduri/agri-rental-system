// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZz2jymEkeHB4xXOrX6GOQPoWeNR1XnzU",
  authDomain: "agri-rental-system.firebaseapp.com",
  projectId: "agri-rental-system",
  storageBucket: "agri-rental-system.firebasestorage.app",
  messagingSenderId: "108224517875",
  appId: "1:108224517875:web:2c9b4c3c64580b01e74986",
  measurementId: "G-GJ533QCJLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);