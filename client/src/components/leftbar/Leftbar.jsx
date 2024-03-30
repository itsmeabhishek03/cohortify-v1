import React, { useEffect } from 'react';
import { Chat } from '@mui/icons-material';
import './leftbar.css';
import { AuthContext } from '../../context/AuthContext';
import List from "../list/List";
import { useContext, useState } from 'react';
import axios from 'axios';

const Leftbar = () => {
  const {user, setCurrentChat, currentChat} = useContext(AuthContext);
  const [userChannel, setUserChannel] = useState([]);

  useEffect(()=>{
    const getChannel = async () =>{
      const res = await axios.get(`http://localhost:5555/api/channel/user/${user._id}`);
      console.log(res.data);
      setUserChannel(res.data);
    }
    getChannel();
  }, [currentChat]);

  return (
    <div className="leftbar" >
    <div className="leftbarWrapper">
       <ul className="leftbarList">

        {userChannel.slice().reverse().map((u)=>(
          <>
          <List key={u._id} channel={u} />
          <hr className="sidebarHr" />
          </>
        ))}

        
       </ul>
       
       
       
    </div>
  </div>
  )
}

export default Leftbar;