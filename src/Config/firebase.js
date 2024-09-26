import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQQQsZs8AIq4RB3InZ4LfLcVr4x8RWYRs",
  authDomain: "ilearn-b3fb2.firebaseapp.com",
  projectId: "ilearn-b3fb2",
  storageBucket: "ilearn-b3fb2.appspot.com",
  messagingSenderId: "564167289798",
  appId: "1:564167289798:web:95e44c3cdf29454f1aa0c7",
  measurementId: "G-GWCWB40DWM"
};





// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;