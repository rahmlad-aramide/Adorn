import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmmCY9GulJs3P6rBGjzllst251cL_BQtk",
  authDomain: "adorn-home-decor.firebaseapp.com",
  projectId: "adorn-home-decor",
  storageBucket: "adorn-home-decor.appspot.com",
  messagingSenderId: "558678339119",
  appId: "1:558678339119:web:0d77bd7d0ba68030a720da",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("An error occured", error);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signUserOut = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
