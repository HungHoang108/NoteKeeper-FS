// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCsVEfagThTcGANO4JYPk00_falfwugSMs",
  authDomain: "notekeeper-authen.firebaseapp.com",
  projectId: "notekeeper-authen",
  storageBucket: "notekeeper-authen.appspot.com",
  messagingSenderId: "216138932551",
  appId: "1:216138932551:web:d60321b2b88c5d5ffcec62"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  }

  export const signOutUser = async ()=> await signOut(auth)

  export const onAuthStateChangedListener = (callback)=> {
    onAuthStateChanged(auth, callback)
  }