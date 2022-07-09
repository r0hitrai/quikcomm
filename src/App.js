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
// import Login componen from Login.js
import Login from './Login';

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
          <Login />
        )
      }
    </div>
  );
}

export default App;
