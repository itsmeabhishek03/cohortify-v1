import React,{useState, useEffect} from 'react';
import './message.css';
import user1 from '../../assests/user.jpeg';
import {format} from "timeago.js";
import axios from 'axios';

const Message = ({message, own, id}) => {
  const [sender, setSender] = useState({});
  //const [receiver, setReceiver] = useState({});
//  console.log("MESSAGE: ",message.content)
//  console.log("OWN: ", own)
//  console.log("ID :",id);
 useEffect(() => {
  const getSender = async () => {
    // console.log(message.content)
    try {
      const res = await axios.get(`http://localhost:5555/api/user?userId=${id}`);
      if (res.data && res.data.username) {
        setSender(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (id) {
    getSender();
  }
}, [id]);


  return (

    <div className={own ? "message own": "message"}>
      
       
        <div className="messageTop">
        
          
            <div className="messageMid" >
            <span className="messageSender">{sender.username}</span>
            <img className="messageImg" src={user1}   alt="" />
            
            </div>
            <span className="messageText">{message.content}</span>
        </div>
        <div className="messageBottom">
            {format(message.createdAt)}
        </div>
    </div>
  )
}

export default Message