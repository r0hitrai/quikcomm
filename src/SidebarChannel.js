// import React component from react library
import React from 'react';

// SidebarChannel function, parameters: user id, channel name
function SidebarChannel({ id, channel }) {
  // return HTML code
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannel_hash">#</span>Youtube
      </h4>
    </div>
  );
}

// export SidebarChannel function
export default SidebarChannel;