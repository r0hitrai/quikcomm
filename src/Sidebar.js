// import React component from react library
import React from 'react';
// import Sidebar.css from current folder
import './Sidebar.css';
// import expand more icon from material ui
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import add icon from material ui
import AddIcon from '@mui/icons-material/Add';
// import SidebarChannel component from SidebarChannel.js
import SidebarChannel from './SidebarChannel';
// import voice signal icon from material ui
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
// import info icon from material ui
import InfoOutlindedIcon from '@mui/icons-material/InfoOutlined';
// import call icon from material ui
import CallIcon from '@mui/icons-material/Call';

// Sidebar function
function Sidebar() {
    // return HTML code
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
            <div className="sidebar__channelsList">
              <SidebarChannel />
              <SidebarChannel />
              <SidebarChannel />
              <SidebarChannel />
            </div>
          </div>
          <div className="sidebar__voice">
            <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large" />
            <div className="sidebar__voiceInfo">
              <h3>Voice Connected</h3>
              <p>Stream</p>
            </div>
            <div className="sidebar__voiceIcons">
              <InfoOutlindedIcon />
              <CallIcon />
            </div>
          </div>
        </div>
    );
}

// export Sidebar function
export default Sidebar;