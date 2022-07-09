// import React component from ract library
import React from 'react';
// import ChatHeader.css from current folder
import './ChatHeader.css';

// ChatHeader function
function ChatHeader() {
  // return HTML code
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
        </h3>
      </div>
    </div>
  );
}

// export ChatHeader function
export default ChatHeader;