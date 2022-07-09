// import app initializer component from firebase app
import { initializeApp } from 'firebase/app';
// import firestore database component from firebase firestore
import { getFirestore } from 'firebase/firestore';
// import auth, sign in with popup and google auth provider from firebase auth
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRAi2ZJ975WLePJuONoE8HPe3rK-O6MSs",
  authDomain: "quikcomm-435ea.firebaseapp.com",
  projectId: "quikcomm-435ea",
  storageBucket: "quikcomm-435ea.appspot.com",
  messagingSenderId: "314028914608",
  appId: "1:314028914608:web:f5eb8ec2f3b3363aad4875",
  measurementId: "G-BV88VVFZZ5"
};

// initialize the app using the above configurtion
const firebaseApp = initializeApp(firebaseConfig);
// get the database object
const db = getFirestore(firebaseApp);
// get the authentication object
const auth = getAuth();
// get the Google Authentication service provider
const provider = new GoogleAuthProvider();

//e export auth, sign in with popup and provider component explicitly
export { auth, signInWithPopup, provider };
// export db component by default
export default db;