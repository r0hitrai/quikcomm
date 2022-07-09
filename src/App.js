// import React component from react library
import React from 'react';
// import App.css from current folder
import './App.css';
// import sidebar function from Sidebar.js
import Sidebar from './Sidebar';
// import Chat function from Chat.js
import Chat from './Chat';
// import use selector component from redux
import { useSelector } from 'react-redux';
// import select user selector from user slice
import { selectUser } from './features/userSlice';

function App() {
  // logged in user
  const user = useSelector(selectUser);
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
          <h2>You need to login.</h2>
        )
      }
    </div>
  );
};

export default App;
