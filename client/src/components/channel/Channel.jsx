import React,{useState} from 'react';
import './channel.css';
import ChatSection from '../chatsection/ChatSection';
import ChannelInfo from '../channelinfo/ChannelInfo';
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const Channel = () => {
  const [SearchChannel, setSearchChannel] = useState(true);
  return (
    <div className='channel'>
      <div className='channelTopWrapper' >
      <div className='channel-top' >
        <input type="text" placeholder='search channel by name or link......' className='channelInput' />
        <SearchIcon color='secondary' className='ChannelSearchIcon' />
      </div>
      <button className=' ring ring-blue-300 ring-offset-2' >Create Channel <AddIcon className='addIcon'  /> </button>
      </div>
     
      <div className='channel-bottom' >
        {SearchChannel ? <ChannelInfo/> : <ChatSection/>}
      </div>
      {/* <hr className="sidebarHr" /> */}
    </div>
  )
}

export default Channel