import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDH_MPoFCf2SMg4Jx3wtZJKJFbc8eJSESM",
  // apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "abdrahman-oladimeji.firebaseapp.com",
  projectId: "abdrahman-oladimeji",
  storageBucket: "abdrahman-oladimeji.appspot.com",
  messagingSenderId: "866130121015",
  appId: "1:866130121015:web:b30ee2c3ea597db9184ab2",
  measurementId: "G-NG5MS2YL0K"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
export default app;