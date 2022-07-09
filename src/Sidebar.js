// import React component from react library
import React from 'react';
// import Sidebar.css from current folder
import './Sidebar.css';
// import expand more icon from material ui
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Sidebar function
function Sidebar() {
    // return value
    return (
        <div className="sidebar">
          <h2>i am the sidebar</h2>
          <div className="sidebar__top">
            <h3>Sidebar Top</h3>
            <ExpandMoreIcon />
          </div>
        </div>
    )
}

// export Sidebar function
export default Sidebar