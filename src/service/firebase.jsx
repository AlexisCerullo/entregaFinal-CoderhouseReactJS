// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "entregafinal-coderhousereact.firebaseapp.com",
  projectId: "entregafinal-coderhousereact",
  storageBucket: "entregafinal-coderhousereact.firebasestorage.app",
  messagingSenderId: "223267578225",
  appId: "1:223267578225:web:ce382d5a4493dedbffd6d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  

export const db = getFirestore(app)