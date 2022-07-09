// import React component from react
import React from 'react';
// import App.css from current folder
import './App.css';
// import sidebar function from Sidebar.js
import Sidebar from './Sidebar';

function App() {
  // return HTML code
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}

export default App;
