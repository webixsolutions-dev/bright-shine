// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWxMp27Ezx3mohkN46vVFu6UOmeK2121c",
  authDomain: "bright-shine-3307f.firebaseapp.com",
  databaseURL: "https://bright-shine-3307f-default-rtdb.firebaseio.com",
  projectId: "bright-shine-3307f",
  storageBucket: "bright-shine-3307f.firebasestorage.app",
  messagingSenderId: "1001670685708",
  appId: "1:1001670685708:web:1e13389d2910eba47d2a29"
};

// Initialize Firebase (prevents multiple initializations in development)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore (for structured data)
const db = getFirestore(app);

// Initialize Realtime Database (for real-time data)
const rtdb = getDatabase(app);

export { app, db, rtdb };