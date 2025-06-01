// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5wwEx3cTftk0JGQf7U_vyVotIleh0JRM",
  authDomain: "slow-aging-app.firebaseapp.com",
  projectId: "slow-aging-app",
  storageBucket: "slow-aging-app.firebasestorage.app",
  messagingSenderId: "267777166451",
  appId: "1:267777166451:web:a39baf7e164d971aef6e06"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);