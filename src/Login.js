// import React component from react library
import React from 'react';
// import Login.css from current folder
import './Login.css';
// import Button component from material ui
import { Button } from '@mui/material';
// import auth sign in with popup and provider function from firebase.js
import { auth, signInWithPopup, provider } from './firebase';

// Login function
function Login() {
  // sign in function
  const signIn = () => {
    // open google sign-in in new window
    signInWithPopup(auth, provider).catch((error) => alert(error.message));
  };
  // return HTML code
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://raw.githubusercontent.com/r0hitrai/Images/main/small_logo_blurple_RGB.png" alt="QuikComm" />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

// export Login component
export default Login;