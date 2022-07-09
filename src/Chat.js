// import React, useState, useEffect component from react library
import React, { useState, useEffect } from 'react';
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
// import use selector component from redux
import { useSelector } from 'react-redux';
// import select channel id and select channel name from app slice
import { selectChannelId, selectChannelName } from './features/appSlice';
// import select user component from user slice
import { selectUser } from './features/userSlice';
// import db, collection, onSnapshot, addDoc component form firebase.js
import db, { collection, onSnapshot, addDoc } from './firebase';
// import server timestamp, doc, orderBy, query component from firestore
import { serverTimestamp, doc, orderBy, query } from 'firebase/firestore';

// Chat function
function Chat() {
  // user, channel id, channel name variables
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  // message string
  const [input, setInput] = useState("");
  // messages array
  const [messages, setMessages] = useState([]);
  // runs for channel id
  useEffect(() => {
    if(channelId) {
      onSnapshot(query(collection(db, "channels", channelId, "messages"), orderBy("timestamp", "desc")), (snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
    }
  }, [channelId]);
  // sending message
  const sendMessage = (e) => {
    // prevent reload
    e.preventDefault();
    addDoc(collection(db, "channels", channelId, "messages"), {
      timestamp: serverTimestamp(),
      message: input,
      user: user,
    });
    // set input to empty
    setInput("");
  };
  // return HTML code
  return (
    <div className="chat">
      <ChatHeader channelName={channelName}/>
      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input disabled={!channelId} value={input} onChange={e => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
          <button disabled={!channelId} className="chat__inputButton" type="submit" onClick={sendMessage}>Send Message</button>
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