// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqOJ7CYWMNVtgqMSUziDyGDiKUaz5Lty4",
  authDomain: "simple-firebase-practice-18c86.firebaseapp.com",
  projectId: "simple-firebase-practice-18c86",
  storageBucket: "simple-firebase-practice-18c86.appspot.com",
  messagingSenderId: "188170200186",
  appId: "1:188170200186:web:43218daaf898c7ef9c87c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export default app;
