// import React component from react library
import React from 'react';
// import SidebarChannel.css from current folder
import './SidebarChannel.css';
// import use dispatch component from redux
import { useDispatch } from 'react-redux';
// import set channel info component from app slice
import { setChannelInfo } from './features/appSlice';

// SidebarChannel function, parameters: user id, channel name
function SidebarChannel({ id, channelName }) {
  const dispatch = useDispatch();
  // return HTML code
  return (
    <div className="sidebarChannel" 
      onClick={() => dispatch(
        setChannelInfo({
          channelId: id,
          channelName: channelName,
        })
      )}
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>{channelName}
      </h4>
    </div>
  );
}

// export SidebarChannel function
export default SidebarChannel;