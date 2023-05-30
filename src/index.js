import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZh3Rby89UQ_5O-HyqaOQUqeslMCTXSCQ",
  authDomain: "ishaikhfaiz-blog.firebaseapp.com",
  projectId: "ishaikhfaiz-blog",
  storageBucket: "ishaikhfaiz-blog.appspot.com",
  messagingSenderId: "234009411522",
  appId: "1:234009411522:web:6882186bd1cb56df3da05b",
  measurementId: "G-JKF77YYKLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
