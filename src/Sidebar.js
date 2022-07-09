// import React component from react library
import React from 'react';
// import Sidebar.css from current folder
import './Sidebar.css';
// import expand more icon from material ui
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import add icon from material ui
import AddIcon from '@mui/icons-material/Add';

// Sidebar function
function Sidebar() {
    // return value
    return (
        <div className="sidebar">
          <div className="sidebar__top">
            <h3>Sidebar Top</h3>
            <ExpandMoreIcon />
          </div>
          <div className="sidebar__channels">
            <div className="sidebar__channelsHeader">
              <div className="sidebar__header">
                <ExpandMoreIcon />
                <h4>Text Channels</h4>
              </div>
              <AddIcon className="sidebar__addChannel" />
            </div>
          </div>
          <div className="sidebar__channelsList">
            i am sidebar channels list
          </div>
        </div>
    );
}

// export Sidebar function
export default Sidebar