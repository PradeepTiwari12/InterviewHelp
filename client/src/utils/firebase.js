
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-6f9fa.firebaseapp.com",
  projectId: "interviewiq-6f9fa",
  storageBucket: "interviewiq-6f9fa.firebasestorage.app",
  messagingSenderId: "470329211253",
  appId: "1:470329211253:web:58205e3969eedbde6abb3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export{auth,provider}