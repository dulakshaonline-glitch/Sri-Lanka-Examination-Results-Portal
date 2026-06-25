const firebaseConfig = {
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP4R4dUy7oBUWboEPP0tC8ka7PZvYU9lQ",
  authDomain: "results-688fc.firebaseapp.com",
  projectId: "results-688fc",
  storageBucket: "results-688fc.firebasestorage.app",
  messagingSenderId: "953265936506",
  appId: "1:953265936506:web:7f480db3a2f25c15cac3c3",
  measurementId: "G-62P12Z7FY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();