// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5akonDKsmrj5Kc7cxKzOmNqpq_9xPhuQ",
  authDomain: "ema-john-a34a6.firebaseapp.com",
  projectId: "ema-john-a34a6",
  storageBucket: "ema-john-a34a6.appspot.com",
  messagingSenderId: "92235468653",
  appId: "1:92235468653:web:3af00dfd86ebc624c19464",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
