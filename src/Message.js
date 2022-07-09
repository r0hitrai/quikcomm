// import React component from react library
import React from 'react';
// import Message.css from current folder
import './Message.css';
// import Avatar component from material ui
import { Avatar } from '@mui/material';

// Message function, parameters: timestamp, user ,message
function Message({ timestamp, user, message }) {
  // return HTML code
  return (
    <div className="message">
      <Avatar src={user.photo} alt="Profile" />
      <div className="message__info">
        <h4>
          {user.displayName}
          <span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

// export Message function
export default Message;