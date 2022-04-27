import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { Navigate } from "react-router-dom";
import Toastify from "./toastNotify";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCzJHBeqcDT3E-uNba3mCP7Z0l66rZD4u8",
  authDomain: "fire-blog-62cc3.firebaseapp.com",
  projectId: "fire-blog-62cc3",
  storageBucket: "fire-blog-62cc3.appspot.com",
  messagingSenderId: "1031776170540",
  appId: "1:1031776170540:web:3945db4ee6eb37ea899789",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate,displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/login");
    await updateProfile(auth.currentUser, {
        displayName: displayName
   
      });
  } catch (error) {
    alert(error.message);
  }
};

export const signInUser = async (email, password, navigate) => {
  try {
    let credential = await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
    console.log(credential);
  } catch (error) {
    alert(error.message);
  }
};

export const userObserver = (setUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      // ...
    } else {
      setUser(false);
    }
  });
};

export const googleSignUp = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      navigate("/login");
    })
    .catch((error) => {});
};

export const LogOut =()=>{
    signOut(auth)
    Toastify("logged out succsess")
}