// import React, use state component from react library
import React,{ useEffect, useState } from 'react';
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
// import Avatar component from material ui
import { Avatar } from '@mui/material';
// import mic icon from material ui
import MicIcon from '@mui/icons-material/Mic';
// import headset icon from material ui
import HeadsetIcon from '@mui/icons-material/Headset';
// import settings icon from material ui
import SettingsIcon from '@mui/icons-material/Settings';
// import use selector component from redux
import { useSelector } from 'react-redux';
// import select user component from user slice
import { selectUser } from './features/userSlice';
// import db, auth, colleciton, onSnpashot, addDoc component from firebase.js
import db, { auth, collection, onSnapshot, addDoc } from './firebase';

// Sidebar function
function Sidebar() {
  // user variable
  const user = useSelector(selectUser);
  // channels variables
  const [channels, setChannels] = useState([]);
  // runs on first render
  useEffect(() => {
    onSnapshot(collection(db, "channels"), (snapshot) => setChannels(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        channel: doc.data(),
      }))
    ))
  }, []);
  // add channel
  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");
    if (channelName) {
      addDoc(collection(db, "channels"), {
        channelName: channelName,
      });
    }
  };
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
          <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          {channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
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
      <div className="sidebar__profile">
        <Avatar onClick={() => auth.signOut()} src={user.photo} alt="profile"/>
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

// export Sidebar function
export default Sidebar;