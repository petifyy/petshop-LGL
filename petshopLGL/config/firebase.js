// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCoEpg0k4gQTjo-VI3lj9k5YnJEZP-Igo",
  authDomain: "teste-815d9.firebaseapp.com",
  projectId: "teste-815d9",
  storageBucket: "teste-815d9.firebasestorage.app",
  messagingSenderId: "192217510489",
  appId: "1:192217510489:web:d711b4e55d97bafcbd7748",
  measurementId: "G-80QJJJH9B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);