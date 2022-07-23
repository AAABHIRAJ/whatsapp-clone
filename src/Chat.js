import { Avatar, IconButton } from '@mui/material';
import React, { useState } from 'react';
import "./Chat.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from "./axios";


function Chat({ messages }) {


    const [input, setInput] = useState("");

    const sendMessage = async (event) => {
        event.preventDefault();
        await axios.post("/api/v1/messages/new",
        
            {
                message: input,
                name: "Abhiraj",
                recieved: true
            }
        )
        console.log("in mothrfucker.....");

        setInput("");

    };

  return (
      <div className='chat'>
          <div className='chat__header'>
              <Avatar />
              <div className='chat__headerInfo'>
                  <h3>chat name</h3>
                  <p>last seen ..</p>
              </div>
              <div className='chat__headerRight'>
                  <IconButton>
                      <SearchIcon />
                  </IconButton>
                  <IconButton>
                      <AttachFileIcon />
                  </IconButton>
                  <IconButton>
                       <MoreVertIcon />
                  </IconButton>   
              </div>
          </div>

          <div className='chat__body'>
             
              {messages.map((message) => {
                   return  <p className={`chat__received ${message.recieved && "chat__sent"}`} >
                  <span className='chat__name'>{message.name}</span>
                  {message.message}
                  <span className='chat__timestamp'>{new Date().toUTCString()}</span>
                </p>
               })}
                
             
                  

          </div>

          <div className='chat__footer'>
              <InsertEmoticonIcon />
              <form action='#' method='#'>
                  <input
                      onChange={(e) => setInput(e.target.value)}
                      type="text"
                      placeholder="Type your message here"
                      value={input}
                    />
                  <button onClick={sendMessage} type="submit">Send</button>
              </form>
              <MicIcon />
          </div>
      </div>
  )
}

export default Chat