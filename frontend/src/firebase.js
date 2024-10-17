import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY, // Use process.env in React
  authDomain: "signsense-eccb4.firebaseapp.com",
  projectId: "signsense-eccb4",
  storageBucket: "signsense-eccb4.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_ID, // Use process.env for all env variables
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-W2HYKWBL7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage

// Export the initialized Firebase services for use in your application
export { auth, db, storage };
