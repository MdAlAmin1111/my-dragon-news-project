// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhzNueB9GYS8mswG9VVxGhBlRvH6hJ6P0",
  authDomain: "dragon-news-c1ac8.firebaseapp.com",
  projectId: "dragon-news-c1ac8",
  storageBucket: "dragon-news-c1ac8.firebasestorage.app",
  messagingSenderId: "83531774796",
  appId: "1:83531774796:web:d2d973312fff4cc570ade9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);