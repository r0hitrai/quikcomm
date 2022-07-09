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
import { selecUser } from './features/userSlice';

function App() {
  // return HTML code
  return (
    <div className="app">
      <Sidebar />
      {/* Chat */}
      <Chat />
    </div>
  );
}

export default App;
