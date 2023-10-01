import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeGZeccG_VecPNGuD1GTOm58XIQq8y548",
  authDomain: "ecommerce-reactjs-b3d18.firebaseapp.com",
  projectId: "ecommerce-reactjs-b3d18",
  storageBucket: "ecommerce-reactjs-b3d18.appspot.com",
  messagingSenderId: "306843823922",
  appId: "1:306843823922:web:fda5e10f71aa6c1af4f12b",
  measurementId: "G-2YY5GKK5KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
