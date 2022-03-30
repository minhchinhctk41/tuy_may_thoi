
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC3qroliNjONhab0KWH0mls5zfryS5ZoWA",
  authDomain: "heyo-242f2.firebaseapp.com",
  projectId: "heyo-242f2",
  storageBucket: "heyo-242f2.appspot.com",
  messagingSenderId: "842551006052",
  appId: "1:842551006052:web:7b884e534e21912c77a071"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const auth = getAuth(app);
export { db };