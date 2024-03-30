import React,{useContext, useEffect, useState, useRef} from 'react';
import './chatsection.css';
import user from "../../assests/user.jpeg";
import Message from '../message/Message';
import youtubeThumbnail from "youtube-thumbnail"; 
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import io from 'socket.io-client';



const ChatSection = ({}) => {

  const apiKey = "AIzaSyDXQu8C7JKtqHWINsMRDxkicmGKyHNqdpE";
  const {currentChat, setCurrentChat, user} = useContext(AuthContext);
  const [thumbnail, setThumbnail] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const socket = useRef();
  const [youtubeChannelName, setYoutubeChannelName] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();


  useEffect(() =>{
    socket.current = io("ws://localhost:3001");
    socket?.current.on("message", (data)=>{
     setArrivalMessage({
       sender: data.senderId,
       text: data.text,
       createdAt: Date.now()
     })
    })
    return () => {
      socket.current.disconnect();
    }
  },[]);

  useEffect(() =>{
    arrivalMessage  && setMessages(prev=>[...prev, arrivalMessage])
  },[arrivalMessage, currentChat, messages])

  
  useEffect(() =>{
    scrollRef.current?.scrollIntoView({behavior:"smooth"})
    console.log("search")
 },[messages.length])


  function extractVideoId(url) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  useEffect(()=>{
    const handleChat = async () =>{
      const videoId = extractVideoId(currentChat?.link);
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`);
      console.log(response.data);
      setThumbnail(response.data.items[0].snippet.thumbnails.high.url)
      setYoutubeChannelName(response.data.items[0].snippet.channelTitle);
      setVideoTitle(response.data.items[0].snippet.title);
      
    } 
    handleChat();
  }, [currentChat]);

  useEffect(()=>{
    const  getOlderMessages = async () =>{
      try {
        const res = await axios.get(`http://localhost:5555/api/message/${currentChat._id}/messages/${user._id}`);
        // console.log(res.data);
        setMessages(res.data);
      } catch (error) {
        console.log(error)
      }

    }
    getOlderMessages();
  }, [currentChat, user, messages]);


  useEffect(() => {
    socket.current?.emit('joinChannel', currentChat._id);
    console.log("This", currentChat)
  }, [currentChat]);



  const handleSumbit = async (e) =>{
    e.preventDefault();
    
    socket.current?.emit("sendMessage",{
      senderId: user._id,
      channelId: currentChat._id,
      text: newMessage
    })

    const message = {
      content: newMessage,
      sender: user._id,
      channel: currentChat._id
    }
    console.log("SEE HERE!!", message)
   
    try {
      const res = await axios.post("http://localhost:5555/api/message", message);
      console.log("SEE", res.data)
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
   }

  
  return (
   
    <>
    <div className='chat'>
      <div className='chat-top' >
        <Link to={currentChat.link} target='_blank' >
          <img src={thumbnail} alt="thumbnail" className='youtubeThumbNail' />
        </Link>
        <div className='chat-content' >
        <h1> Title: {videoTitle}</h1>
        <p> Youtube Channel Name: {youtubeChannelName}</p>
        </div>
      </div>
      <div className='br'/>
      <div className='chat-bottom' > 
      <div className="chatBox">
        <div className="chatBoxWrapper">
          { currentChat._id  ? (
            <>
           <div className="chatBoxTop">
        
            {messages.map((m, index) => (
              <div key={index}>
                <div>
                {currentChat._id === m.channel &&
                  <Message message={m} own={m.sender === user._id} id={m.sender} />
                }
                </div>
                <div ref={index === messages.length - 1 ? scrollRef : null}></div>
              </div>
            ))}
          </div>

            <div className="chatBoxBottom">
               <textarea placeholder="Message" 
              className="chatMessageInput" onChange={(e)=>setNewMessage(e.target.value) } value={newMessage} ></textarea> 
               <button className="chatSubmitButton" onClick={handleSumbit} >Send</button>
            </div>  
            </>)
            :
            <>
            <div className="chatBoxBottom">
            <textarea placeholder="Message" 
              className="chatMessageInput" onChange={(e)=>setNewMessage(e.target.value) } value={newMessage} ></textarea> 
            <span className="noChatText" >Start the conversation..... </span> 
              <button className="chatSubmitButton" onClick={handleSumbit} >Send</button>
            </div>  
           </>
            
            
            }
        </div>  
              
      </div>  
      </div>

    </div>
    </>
  )
}

export default ChatSection