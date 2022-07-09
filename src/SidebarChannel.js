// import React component from react library
import React from 'react';
// import SidebarChannel.css from current folder
import './SidebarChannel.css';

// SidebarChannel function, parameters: user id, channel name
function SidebarChannel({ id, channel }) {
  // return HTML code
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannel__hash">#</span>Youtube
      </h4>
    </div>
  );
}

// export SidebarChannel function
export default SidebarChannel;