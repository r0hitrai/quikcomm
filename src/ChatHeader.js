// import React component from ract library
import React from 'react';
// import ChatHeader.css from current folder
import './ChatHeader.css';
// import notifications icon from material ui
import NotificationsIcon from '@mui/icons-material/Notifications';
// import location icom from material ui
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
// import people icon from material ui
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
// import search icon from material ui
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// import help icon from material ui
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

// ChatHeader function
function ChatHeader() {
  // return HTML code
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          Test Channel Name
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
        <div className="chatHeader__search">
          <input placeholder="search" />
          <SearchRoundedIcon />
        </div>
        <HelpRoundedIcon />
      </div>
    </div>
  );
}

// export ChatHeader function
export default ChatHeader;