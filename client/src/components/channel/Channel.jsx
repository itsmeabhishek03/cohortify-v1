import React,{useContext, useEffect, useState, useRef} from 'react';
import './channel.css';
import ChatSection from '../chatsection/ChatSection';
import ChannelInfo from '../channelinfo/ChannelInfo';
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../../context/AuthContext';
import Close from '@mui/icons-material/Close';
import axios from "axios";

const Channel = () => {
  const apiKey = "AIzaSyDXQu8C7JKtqHWINsMRDxkicmGKyHNqdpE";

  const {currentChat, setCurrentChat, user} = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

   const link= useRef();
   const name = useRef();
   const description = useRef();
   const isPrivate = useRef();

  useEffect(()=>{
    setCurrentChat(currentChat);
  },[currentChat]);

  function isValidChannelName(name) {
    const regex = /^[a-zA-Z0-9_]+$/;
    return regex.test(name);
  }

  const handleSumbit = async (e) => {
    e.preventDefault();
    const videoId = extractVideoId(link.current.value);
    const channelName = name.current.value;
    
    if(videoId) {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`);
      console.log(response)
      console.log(isPrivate.current.value);
      // Check if the channel name is valid
      if (!isValidChannelName(channelName)) {
        alert('Please enter a valid channel name (alphanumeric characters and underscores only).');
        return;
      }
      try {
        const data = {
            link: link.current.value, 
            name: name.current.value,
            description: description.current.value,
            isPrivate:isPrivate.current.value 
        }
        const res = await axios.post(`http://localhost:5555/api/channel/create/${user._id}`, data);
        console.log(res);
        setShowModal(false);
        setCurrentChat(res.data.channel); // Assuming res.data contains the response data
        console.log(res.data.channel);
        alert("Success!");
      }catch(err){
        alert(err.message);
      }

    }else{
      console.log("error")
      alert("please share a valid youtube url")
    }
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  function extractVideoId(url) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  useEffect(()=>{
    setCurrentChat(currentChat);
    console.log(currentChat);
  },[currentChat]);


  return (
    <div className='channel'>
      <div className='channelTopWrapper' >
      <div className='channel-top' >
        <input type="text" placeholder='search channel by name or link......' className='channelInput' />
        <SearchIcon color='secondary' className='ChannelSearchIcon' />
      </div>
      <button className='ring ring-blue-300 ring-offset-2' onClick={toggleModal} >Create Channel <AddIcon className='addIcon'  /> </button>
      </div>
     
      <div className='channel-bottom' >
        {!currentChat ? <ChannelInfo/> : <ChatSection currentChat={currentChat} />}
      </div>
      {showModal && (
         <div className="modal">
       <form className="modal-content" onSubmit={handleSumbit} >
        <div className='modal-top' >
         <h2 className="text-3xl bold mb-2">Create Channel</h2>
        <Close   onClick={toggleModal} />
        </div>
    <div className="modal-main">
      <input className="modal-input" type="link" placeholder="Youtube link" ref={link} required />
      <input className="modal-input" type="text" placeholder="Channel name" ref={name} required minLength={5} />
      <input className="modal-input" type="text" placeholder="Description" ref={description}  />
      
      {/* Replace the input field with a select element for the dropdown */}
      <select className="modal-dropdown modal-input" defaultValue="public" required ref={isPrivate} >
        <option value="" disabled>Select Channel Type</option>
        <option value="public">Public</option>
        <option value="private">Private</option>
        {/* Add more options as needed */}
      </select>
    </div>

    <button className='button ring ring-purple-300 ring-offset-2'  type='sumbit'>Create Channel</button>
  </form>
       </div>
      )}
   
    </div>
  )
}

export default Channel