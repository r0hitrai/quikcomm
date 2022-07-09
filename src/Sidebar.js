// import React component from react library
import React from 'react';
// import Sidebar.css from current folder
import './Sidebar.css';

// Sidebar function
function Sidebar() {
    // return value
    return (
        <div className="sidebar">
          <h2>i am the sidebar</h2>
          <div className="sidebar__top">
            <h3>Sidebar Top</h3>
          </div>
        </div>
    )
}

// export Sidebar function
export default Sidebar