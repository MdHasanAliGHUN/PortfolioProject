// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjBHI3I1t71hQ565yFgOPf85cxKyf-rww",
  authDomain: "portfolio-project-75466.firebaseapp.com",
  projectId: "portfolio-project-75466",
  storageBucket: "portfolio-project-75466.firebasestorage.app",
  messagingSenderId: "381698079906",
  appId: "1:381698079906:web:6db2d500886fcd67142bfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);