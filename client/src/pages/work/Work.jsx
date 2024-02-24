import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Channel from '../../components/channel/Channel';
import './work.css';

const Work = () => {
  return (
    <div>
    <Topbar />
    <div className="container">
     <Leftbar/>
     <Channel/>
     <Rightbar />
    </div>
     </div>
  )
}

export default Work