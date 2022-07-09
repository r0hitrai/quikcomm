// import React component from react library
import React, { useEffect } from 'react';
// import App.css from current folder
import './App.css';
// import sidebar function from Sidebar.js
import Sidebar from './Sidebar';
// import Chat function from Chat.js
import Chat from './Chat';
// import use selector component from redux
import { useSelector, useDispatch } from 'react-redux';
// import select user selector from user slice
import { selectUser, login, logout } from './features/userSlice';
// import Login componen from Login.js
import Login from './Login';
// import auth from firebase.js
import { auth } from './firebase';

function App() {
  // use to shoot data into data layer
  const dispatch = useDispatch();
  // logged in user
  const user = useSelector(selectUser);
  // run on every render and update
  useEffect(() => {
    // on use of authentication
    auth.onAuthStateChanged((authUser) => {
      console.log("user is ", authUser);
      // check for user
      if (authUser) {
        // the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        )
      } else {
        // the user is logged out
        dispatch(logout());
      }
    })
  }, [dispatch]);
  // return HTML code
  return (
    <div className="app">
      {// if user logged in, load application. else, till user to log in
        user ? (
          <>
            <Sidebar />
            <Chat />
          </>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
