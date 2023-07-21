// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyD8j4OeePwLdaYYX2YWen_ASw-piuO6MSw",
  authDomain: "react-project-b8fd3.firebaseapp.com",
  projectId: "react-project-b8fd3",
  storageBucket: "react-project-b8fd3.appspot.com",
  messagingSenderId: "932304089227",
  appId: "1:932304089227:web:db665b9461107c402ae48e",
  measurementId: "G-BGRHVNZD0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider =new GoogleAuthProvider();
export const db = getFirestore(app);
