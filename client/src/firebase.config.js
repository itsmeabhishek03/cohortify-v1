import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA2IFak2MOud1d_RX0NqIifWAB6FZLtKCo",
  authDomain: "cohortify-bce61.firebaseapp.com",
  projectId: "cohortify-bce61",
  storageBucket: "cohortify-bce61.appspot.com",
  messagingSenderId: "770155665355",
  appId: "1:770155665355:web:2c0675a2b6b13f93f1884e",
  measurementId: "G-WTV3C61CYG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
