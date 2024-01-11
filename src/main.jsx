import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// can be here or in an independent file
/* const firebaseConfig = {
    apiKey: "AIzaSyCSlx3rT2lu3iVxZbak7PWLaZsJpCLmlFw",
    authDomain: "coffeeshop-6e6d6.firebaseapp.com",
    projectId: "coffeeshop-6e6d6",
    storageBucket: "coffeeshop-6e6d6.appspot.com",
    messagingSenderId: "1019642234755",
    appId: "1:1019642234755:web:25809a419a3391b905d8b6"
}; */


//const app = initializeApp(firebaseConfig);
//export const db = getFirestore(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
