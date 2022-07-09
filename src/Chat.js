// import React component from react library
import React from 'react';
// import Chat.css from current folder
import './Chat.css';
// import ChatHeader component from Chatheader.js
import ChatHeader from './ChatHeader';

// Chat function
function Chat() {
  // return HTML code
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages">

      </div>
      <div className="chat__input">
        
      </div>
    </div>
  );
}

// export Chat function
export default Chat;