import React, { useEffect, useState } from 'react';
import './list.css';
import { Chat } from '@mui/icons-material';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';


const List = ({channel}) => {
    const {currentChat, setCurrentChat} = useContext(AuthContext);


    const handleClick = () =>{
      setCurrentChat(channel);

      console.log(currentChat);
    }
   useEffect(()=>{
   
   },[currentChat])

   return (
    <li onClick={handleClick} className={`${currentChat?.name === channel.name ? 'active leftbarListItem' : 'leftbarListItem'}`}
    >
    <Chat className='leftbarListItemIcon' color="secondary"/>
    <span className="leftbarListItemText" >{channel.name}</span>
  </li>
  )
}

export default List