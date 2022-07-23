import React from 'react';
import "./SideBar.css";
import { IconButton, Avatar } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';


function SideBar() {
  return (
      <div className='sidebar'>
          <div className='sidebar__component'>
            <Avatar src="https://scontent.fjdh3-1.fna.fbcdn.net/v/t31.18172-8/14939567_695162700641423_6074991822732935176_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HXkpauGPdeMAX-sgAt4&tn=5eJ5NDFK_jWXc_Kp&_nc_ht=scontent.fjdh3-1.fna&oh=00_AT9C0v4JbTvXKXRGSrKIFZHg2u-qdAF8VfbtlwbCiw7vgw&oe=630127C6" />
            <div className='sidebar__rightComponent'>
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
              </div>
          </div> 
          <div className='sidebar__search'>
                  <div className='sidebar__searchComponent'>
                    <SearchIcon />
                    <input placeholder='Search or Start new chat' type="text" name="search" />
                  </div>
          </div>
          <div className='sidebar__chat'>
              <SidebarChat />
              <SidebarChat />
              <SidebarChat />
          </div>
      </div>
  )
}

export default SideBar