import React, { useEffect, useState } from 'react'
import { Avatar, IconButton ,  InsertEmoticon} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import MoodIcon from '@mui/icons-material/Mood';
import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material'
import './Chat.css'


export default function Chat() {
    const [seed, setSeed] = useState("")
 useEffect(() => {
 setSeed(Math.floor(Math.random() * 5000))
 }, [])
    
  return (
    <div className="chat">
 <div className="chat__header">
 <Avatar src={`https://avatars.dicebear.com/api/human/
b${seed}.svg`} />
 <div className="chat__headerInfo">
 <h3>Room Name</h3>
 <p>Last seen at...</p>
 </div>
 <div className="chat__headerRight">
 <IconButton>
 <SearchOutlined />
 </IconButton>
 <IconButton>
 <AttachFile />
 </IconButton>
 <IconButton>
 <MoreVert />
 </IconButton>
 </div>
 </div>
 <div className="chat_body">
 <p className="chat__message">
 <span className="chat__name">Nabendu</span>
 This is a message
 <span className="chat__timestamp">
 {new Date().toUTCString()}
 </span>
 </p>
 <p className="chat__message chat__receiver">
 <span className="chat__name">Parag</span>
 This is a message back
 <span className="chat__timestamp">
 {new Date().toUTCString()}
 </span>
 </p>
 <p className="chat__message">
 <span className="chat__name">Nabendu</span>
 This is a message again again
 <span className="chat__timestamp">
 {new Date().toUTCString()}
 </span>
 </p>
 </div>
 <div className="chat__footer">
   <MoodIcon/>
 <form>
 <input
 placeholder="Type a message"
 type="text"
 />
 <button type="submit">Send a message</button>
 </form>
 <MicIcon />
 </div>
 </div>
  )
}
