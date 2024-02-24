import React, {useState} from 'react';
import user from "../../assests/user.jpeg";
import './channelinfo.css';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const ChannelInfo = () => {
  const [isRequested, setIsRequested] = useState(true);
  const [isPublic, setIsPublic] = useState(true);
  return (
    <div className='chatInfo' >   
      <div className='chat-top' >
        <img src={user} alt="thumbnail" className='youtubeThumbNail' />
        <div className='chat-content' >
          <p> Cohortify Channel Name: Avengers</p>
          <h1> Title: MERN Course</h1>
          <p> Youtube Channel Name: Aditya Mishra</p>
        </div>
      </div>
      <div className='chat-bottom' >

        {isPublic ? 
        <button className='join ring ring-pink-300 ring-offset-2' > Join
        <AddIcon className='addIcon'  />
        </button> 
         : 
       isRequested ? 
       <button className='withdraw  ring ring-pink-300 ring-offset-2' >Withdraw
       <RemoveIcon className='addIcon' />
       </button> 
       : 
        <button className='requested ring ring-pink-300 ring-offset-2' > Request
        <AddIcon className='addIcon'  />
        </button> 
      
        }
      </div>
  </div>
  )
}

export default ChannelInfo