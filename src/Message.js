// import React component from react library
import React from 'react';
// import Message.css from current folder
import './Message.css';
// import Avatar component from material ui
import { Avatar } from '@mui/material';

// Message function
function Message() {
  // return HTML code
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          Username
          <span className="message__timestamp">this is a timestamp</span>
        </h4>
      </div>
    </div>
  );
}

// export Message function
export default Message;