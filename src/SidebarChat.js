import React from 'react';
import { Avatar } from '@mui/material';
import "./SidebarChat.css"

function SidebarChat() {
  return (
      <div className='sidebarChat'>
          <Avatar src="#"/>
          <div className='sidebarChat__info'>
              <h2>Chat Name</h2>
              <p>This is last message</p>
          </div>
      </div>
  )
}

export default SidebarChat