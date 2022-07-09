// import React component from react library
import React from 'react';
// import Chat.css from current folder
import './Chat.css';
// import ChatHeader component from Chatheader.js
import ChatHeader from './ChatHeader';
// import add circle icon from material ui
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import giftcard icon from material ui
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
// import gif icon from material ui
import GifIcon from '@mui/icons-material/Gif';
// import emoji icon from material ui
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
// import Message component from Message.js
import Message from './Message.js';

// Chat function
function Chat() {
  // return HTML code
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages">
        <Message />
      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input placeholder={'Message #TESTCHANNEL'} />
          <button className="chat__inputButton" type="submit">Send Message</button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

// export Chat function
export default Chat;