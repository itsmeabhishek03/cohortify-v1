import React,{useState} from 'react';
import './chatsection.css';
import user from "../../assests/user.jpeg";
import Message from '../message/Message';
const ChatSection = () => {
  const [currentChat, setCurrentChat] = useState(true);
  return (
    <>
    <div className='chat'>
      <div className='chat-top' >
        <img src={user} alt="thumbnail" className='youtubeThumbNail' />
        <div className='chat-content' >
        <h1> Title: MERN Course</h1>
        <p> Youtube Channel Name: Aditya Mishra</p>
        </div>
      </div>
      <div className='br'/>
      <div className='chat-bottom' > 
      <div className="chatBox">
        <div className="chatBoxWrapper">
          { currentChat ? (
            <>
            <div className="chatBoxTop">
              
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
            <Message message="ffff" own="sss" user="ddd" />
          
            </div>
            <div className="chatBoxBottom">
               <textarea placeholder="Message" 
              className="chatMessageInput"></textarea> 
               <button className="chatSubmitButton"  >Send</button>
            </div>  
            </>)
            :
            <span className="noChatText" >Start the conversation..... </span>  }
        </div>  
              
      </div>  
      </div>

    </div>
    </>
  )
}

export default ChatSection