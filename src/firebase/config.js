// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7e-KTAoHR4biYwvj_B8__umjsZQrrdUA",
  authDomain: "somasmartai-10c1e.firebaseapp.com",
  projectId: "somasmartai-10c1e",
  storageBucket: "somasmartai-10c1e.firebasestorage.app",
  messagingSenderId: "963999862256",
  appId: "1:963999862256:web:26ab0635ee9cdca673e135"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;

