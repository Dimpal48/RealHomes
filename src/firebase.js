import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBqw6aptBDEuZwb9rz40GndyrnVkpvycwk",
  authDomain: "realhomes-29fd6.firebaseapp.com",
  projectId: "realhomes-29fd6",
  storageBucket: "realhomes-29fd6.appspot.com",
  messagingSenderId: "613999094840",
  appId: "1:613999094840:web:17d70e54e63aee54740acd",
  measurementId: "G-YS9WQ9ZCT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore()