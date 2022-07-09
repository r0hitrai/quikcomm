// import React component from react
import React from 'react';
// import App.css from current folder
import './App.css';
// import sidebar function from Sidebar.js
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <h1>lets build a communication app</h1>
      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}

export default App;
