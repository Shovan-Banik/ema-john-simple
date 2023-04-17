// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMrC5ctsoGj8QJavw59JVQuDDdRtAZwbQ",
  authDomain: "ema-john-with-firebase-a-dd8f9.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-dd8f9",
  storageBucket: "ema-john-with-firebase-a-dd8f9.appspot.com",
  messagingSenderId: "202241096827",
  appId: "1:202241096827:web:7d9a219392eb838487f6de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;