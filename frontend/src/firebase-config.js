// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,         // Use environment variables for sensitive data
  authDomain: "signsense-eccb4.firebaseapp.com",
  projectId: "signsense-eccb4",
  storageBucket: "signsense-eccb4.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_ID, // Use environment variables
  appId: process.env.REACT_APP_FIREBASE_APP_ID,           // Use environment variables
  measurementId: "G-W2HYKWBL7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);     // Firebase Authentication service
const db = getFirestore(app);  // Firestore database service

// Export the initialized Firebase services for use in your application
export { auth, db };
