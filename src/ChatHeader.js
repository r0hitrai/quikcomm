// import React component from ract library
import React from 'react';
// import ChatHeader.css from current folder
import './ChatHeader.css';
// import notifications icon from material ui
import NotificationsIcon from '@mui/icons-material/Notifications';

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
      </div>
    </div>
  );
}

// export ChatHeader function
export default ChatHeader;