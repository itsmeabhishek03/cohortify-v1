import React from 'react';
import './message.css';
import user1 from '../../assests/user.jpeg'

const Message = ({message, own, user}) => {
  return (
    <div className={"message"}>
       
        <div className="messageTop">
          
            <div className="messageMid" >
            <span className="messageSender">Abhi</span>
            <img className="messageImg" src={user1}   alt="" />
            
            </div>
            <span className="messageText">hello! </span>
        </div>
        <div className="messageBottom">
            11:11pm
        </div>
    </div>
  )
}

export default Message