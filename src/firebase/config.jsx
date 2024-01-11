// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCSlx3rT2lu3iVxZbak7PWLaZsJpCLmlFw",
    authDomain: "coffeeshop-6e6d6.firebaseapp.com",
    projectId: "coffeeshop-6e6d6",
    storageBucket: "coffeeshop-6e6d6.appspot.com",
    messagingSenderId: "1019642234755",
    appId: "1:1019642234755:web:25809a419a3391b905d8b6"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);