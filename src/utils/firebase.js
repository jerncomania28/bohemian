import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";

import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const createUserViaEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInViaEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

const db = getFirestore();

export const createUserDoc = async (userAuth, otherProps = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userDocSnapShot = await getDoc(userDocRef);

  if (!userDocSnapShot.exists()) {
    const createdAt = new Date();

    try {
      setDoc(userDocRef, {
        createdAt,
        ...otherProps,
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    return;
  }
};

export const getData = async (userAuth) => {
  if (!userAuth?.uid) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const snapshot = await getDoc(userDocRef);
  return snapshot.data();
};

export const forgotPassword = async (email) => {
  if (!email) return;
  return await sendPasswordResetEmail(auth, email);
};

export const signOutUser = async () => await signOut(auth);

export const authStateChange = async (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const getDisplayName = async (auth) => {
  const obj = await getData(auth.currentUser);
  if (!obj) return "";
  const dName = obj.displayName.split(" ")[0];
  return dName;
};
