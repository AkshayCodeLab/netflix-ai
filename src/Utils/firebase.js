// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXOZHAh87qp-IhtRiq8Kk0Hq5jmUu7-pw",
  authDomain: "netflix-ai-a03b9.firebaseapp.com",
  projectId: "netflix-ai-a03b9",
  storageBucket: "netflix-ai-a03b9.appspot.com",
  messagingSenderId: "575178839699",
  appId: "1:575178839699:web:4787d8b5462569569d1f66",
  measurementId: "G-SEEKPFXSWM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
