import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat'



export default function Sidebar() {
  return (
    <div className="sidebar">
 <div className="sidebar_header">
 <Avatar src="https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e07f452/_orig/pixomatic_1572877263963.png"/>
 <div className="sidebar__headerRight">
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


 <div className="sidebar_search">
 <div className="sidebar_searchContainer">
 <SearchOutlinedIcon />
 <input placeholder="Search or start new chat" 
type="text" />
 </div>
 </div>


 <div className="sidebar_chats">
 <SidebarChat />
 <SidebarChat />
 <SidebarChat />
 </div>

 </div>
  )
}