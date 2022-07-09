// import React component from react library
import React from 'react';
// import Chat.css from current folder
import './Chat.css';
// import ChatHeader component from Chatheader.js
import ChatHeader from './ChatHeader';
// import add circle icon from material ui
import AddCircleIcon from '@mui/icons-material/AddCircle';

// Chat function
function Chat() {
  // return HTML code
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages">

      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input placeholder={'Message #TESTCHANNEL'} />
          <button className="chat__inputButton" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

// export Chat function
export default Chat;