import './App.css';
import Chat from './Chat';
import SideBar from './SideBar';
import Pusher from "pusher-js";
import { useEffect, useState } from 'react';
import axios from "./axios";


function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/api/v1/messages/sync")
      .then(response => {
        setMessages(response.data);
      })
  }, []);


  useEffect(() => {
    const pusher = new Pusher('2d13ab0c6f26adb61fd1', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function (newMessage) {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
    
  }, [messages]);
  
  console.log(messages);

  return (
    <div className="App">
      <div className='app__components'>
        <SideBar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
