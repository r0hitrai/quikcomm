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
    </div>
  );
}

// export Message function
export default Message;