// import firebase component from firebase
import firebase from 'firebase';

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
const firebaseApp = firebase.initializeApp(firebaseConfig);
// get the database object
const db = firebaseApp.firestor();
// get the authentication object
const auth = firebaseApp.auth();
// get the Google Authentication service provider
const provider = auth.GoogleAuthProvider();

//e export auth and provider component explicitly
export { auth, provider };
// export db component by default
export default db;